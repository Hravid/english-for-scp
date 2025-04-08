import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-2 w-full bg-gray-300">
            <div className="flex flex-col gap-1 md:gap-4 md:flex-row justify-center items-center px-4 text-center">
                <div className="flex gap-4 items-center text-[10px]">
                    <a 
                        href="https://github.com/Hravid" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 hover:underline py-1"
                    >
                        <FaGithub className="text-xs" /> GitHub
                    </a>
                    
                    <a 
                        href="mailto:contact@hravid.tech" 
                        className="hover:underline py-1"
                    >
                        contact@hravid.tech
                    </a>
                </div>
                
                <p className="mt-1 md:mt-0 text-[10px]">© {currentYear} English Lessons for SCP | MiT License</p>
            </div>
        </footer>
    );
}