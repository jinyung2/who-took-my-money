import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
import Footer from "@/modules/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Who took my money? (Amazon)",
  description:
    "Takes in amazon data dump csv and converts it into simple analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
