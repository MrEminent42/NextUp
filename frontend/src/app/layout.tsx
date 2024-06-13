import type { Metadata } from "next";
import "./globals.css";
import { titilliumWeb } from "./fonts";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "NextUp",
  description: "See what classes you're eligible for at Cal Poly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titilliumWeb.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
