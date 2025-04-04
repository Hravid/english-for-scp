'use client'
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div className="relative">
      {/* Toggle Button*/}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 left-3 z-50 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md shadow-md"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar that animates in */}
      <div 
        className={`fixed top-0 left-0 h-full bg-blue-500 w-[230px] text-white transform transition-transform duration-300 ease-in-out shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="p-4 pt-16">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          
          <h3 className="font-semibold mt-6 mb-2">Lessons</h3>
          <ul className="space-y-2 ml-2">
            <li><Link href="/lessons/present_simple" className="hover:underline">Present Simple</Link></li>
            <li><Link href="/lessons/present_continuous" className="hover:underline">Present Continuous</Link></li>
            <li><Link href="/lessons/past_simple" className="hover:underline">Past Simple</Link></li>
          </ul>
          
          <h3 className="font-semibold mt-6 mb-2">Resources</h3>
          <ul className="space-y-2 ml-2">
            <li><Link href="/resources/vocabulary" className="hover:underline">Vocabulary</Link></li>
            <li><Link href="/resources/grammar" className="hover:underline">Grammar Rules</Link></li>
          </ul>
          
          <h3 className="font-semibold mt-6 mb-2">Practice</h3>
          <ul className="space-y-2 ml-2">
            <li><Link href="/practice/exercises" className="hover:underline">Exercises</Link></li>
            <li><Link href="/practice/tests" className="hover:underline">Tests</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Semi-transparent overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}