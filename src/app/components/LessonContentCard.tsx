import Link from "next/link";
import React, { ReactNode } from "react";

interface LessonContentCardProps {
  title: string;
  content: ReactNode;
}

export default function LessonContentCard({ title, content }: LessonContentCardProps) {
  return (
    <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow bg-gray-200 mb-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="text-base p-3 border border-gray-100 rounded bg-white">
        {content}
      </div>
    </div>
  );
}