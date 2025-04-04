import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";

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
    <html lang="en">
      <head></head>
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
        <Footer/>
      </body>
    </html>
  );
}