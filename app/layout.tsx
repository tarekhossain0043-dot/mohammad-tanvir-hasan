import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Tanvir Hasan Tarek | Full-Stack Developer",
  description: "Portfolio of Mohammad Tanvir Hasan Tarek — Full-Stack Web Developer building thoughtful digital experiences."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}