import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Humanized Ethics Overview",
  description: "A people-first overview of ethical responsibilities in clinical laboratory practice.",
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
