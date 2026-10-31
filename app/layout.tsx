import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mohammad Tanvir Hasan Tarek | Full-Stack Developer",
  description: "Portfolio of Mohammad Tanvir Hasan Tarek — Full-Stack Web Developer building thoughtful digital experiences."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={dmSans.variable}>{children}</body></html>;
}