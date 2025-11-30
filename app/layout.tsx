import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Baapstore Next Showcase",
  description:
    "A modern Next.js landing page inspired by the Baapstore demo storefront at demo.baapstore.com.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} bg-slate-950`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
