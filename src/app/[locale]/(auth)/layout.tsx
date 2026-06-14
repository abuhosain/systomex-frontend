import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import Logo from "@/components/website/shared/Logo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="container h-14 flex items-center">
          <Link href="/" className="transition-opacity hover:opacity-90">
            <Logo size="sm" theme="light" />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>

      <footer className="border-t border-gray-200 bg-white py-4">
        <p className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} SystomeX. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
