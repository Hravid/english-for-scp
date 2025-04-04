'use client'
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  if (isHomePage) {
    return <main>{children}</main>;
  }
  
  return (
    <div className="min-h-[calc(100vh-80px)]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`pl-16 pr-16 px-4 pb-4 transition-all duration-300 ${isSidebarOpen ? 'ml-[230px]' : 'ml-0'}`}>
        {children}
      </main>
    </div>
  );
}