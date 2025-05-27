'use client'
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 left-3 z-50 p-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <div 
        className={`fixed top-0 left-0 h-full bg-blue-500 w-[70%] max-w-xs md:w-[230px] text-white transform transition-transform duration-300 ease-in-out shadow-lg
        ${isOpen ? "translate-x-0" : "-translate-x-full"} z-40 overflow-y-auto`}>
        <div className="p-4 pt-16">
          <h2 className="mb-4 text-xl font-bold">Odnośniki</h2>
          
          
          
          <h3 className="mt-6 mb-2 font-semibold">Materiały</h3>
          <ul className="ml-2 space-y-2">
            <li><Link href="/resources/lessons" className="hover:underline">Gramatyka</Link></li>
            <li><Link href="/resources/vocabulary" className="hover:underline">Słownictwo</Link></li>
          </ul>
          
          <h3 className="mt-6 mb-2 font-semibold">Praktyka</h3>
          <ul className="ml-2 space-y-2">
            <li><Link href="/practice/exercises" className="hover:underline">Ćwiczenia</Link></li>
            <li><Link href="/practice/tests" className="hover:underline">Testy</Link></li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <a
            href="https://ko-fi.com/hravid"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 w-full font-semibold text-center bg-blue-700 rounded hover:underline">
            Support site
          </a>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 cursor-pointer bg-black/30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}