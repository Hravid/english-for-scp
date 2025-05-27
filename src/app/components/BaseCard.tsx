import React from "react";

interface BaseCardProps {
    title:string;
    children?: React.ReactNode
}

export default function BaseCard({ title, children }: BaseCardProps) {
    return(
        <div className="p-4 bg-gray-200 rounded border-2 border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="pb-4 text-2xl text-center">
                {title}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
                {children}
            </div>
        </div>
    );
}