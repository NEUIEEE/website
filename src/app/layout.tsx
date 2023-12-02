import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northeastern IEEE",
  description: "Student Chapter At Northeastern University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
