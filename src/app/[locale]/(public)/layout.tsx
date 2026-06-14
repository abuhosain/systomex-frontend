import type { ReactNode } from "react";
import Navbar from "@/components/siteSettings/navbar/Navbar";
import Footer from "@/components/siteSettings/footer/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
