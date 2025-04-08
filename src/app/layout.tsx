import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '700'], 
});

export const metadata: Metadata = {
  title: "English Lessons for Super Cool People",
  description: "Learn English the cool guy way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head></head>
      <body className="flex flex-col min-h-screen font-mono">
        <div className="flex-grow">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
        <Footer/>
      </body>
    </html>
  );
}