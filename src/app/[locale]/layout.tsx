import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { AppProvider } from "@/contexts/AppContext";
import { SITE_NAME, SITE_DESCRIPTION, SITE_LOGO } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Robotics & Automation Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: { icon: SITE_LOGO, apple: SITE_LOGO },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <AppProvider>
            {children}
            <Toaster position="top-right" richColors closeButton />
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
