import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import Logo from "@/components/website/shared/Logo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <header className="border-b border-white/10 bg-dark/80 backdrop-blur-xl">
        <div className="container h-14 flex items-center">
          <Link href="/" className="transition-opacity hover:opacity-90">
            <Logo size="sm" theme="dark" />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-dark py-4">
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} SystomeX. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
