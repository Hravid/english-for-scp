import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-2 w-full bg-gray-300">
            <div className="flex flex-col gap-1 justify-center items-center px-4 text-center md:gap-4 md:flex-row">
                <div className="flex gap-4 items-center text-[10px]">
                    <a 
                        href="https://github.com/Hravid" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex gap-1 items-center py-1 hover:underline"
                    >
                        <FaGithub className="text-xs" /> GitHub
                    </a>
                    
                    <a 
                        href="mailto:contact@hravid.tech" 
                        className="py-1 hover:underline"
                    >
                        contact@hravid.tech
                    </a>
                </div>
                
                <p className="mt-1 md:mt-0 text-[10px]">© {currentYear} English Lessons for SCP | MiT License</p>
            </div>
        </footer>
    );
}