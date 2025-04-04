import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-lg w-full" style={{ background: '#27374D', color: '#DDE6ED' }}>
            <p className="pt-3 flex justify-center items-center gap-4">© {currentYear} English Lessons for SCP. | MiT License</p>
            <div className="pb-3 flex justify-center items-center gap-4">
                <a href="https://github.com/Hravid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                    <FaGithub /> GitHub
                </a>
                <a href="mailto:contact@hravid.tech" className="hover:underline">
                    hravidd@proton.me
                </a>
            </div>
        </footer>
    );
}