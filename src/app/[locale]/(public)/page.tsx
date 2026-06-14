import type { Metadata } from "next";
import HomePage from "@/components/website/HomePage";
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE, SITE_LOGO } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "robotics",
    "automation",
    "IoT",
    "embedded systems",
    "Arduino",
    "ESP32",
    "Raspberry Pi",
    "robotics training",
    "industrial automation",
    "Bangladesh",
    "SystomeX",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_LOGO, alt: `${SITE_NAME} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomePage />;
}
