import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import AppNavbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Falcon Construction",
  description: "Falcon Construction — Quality building and renovations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white text-black antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <header className="sticky top-0 z-50 border-b border-yellow-400 bg-white/90 backdrop-blur">
            {/* Navbar */}
            <AppNavbar />
          </header>
          <main>{children}</main>
          <footer className="border-t border-yellow-400 bg-white">
            {/* Footer */}
            <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm">
                © {new Date().getFullYear()} Falcon Construction. All rights
                reserved.
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
