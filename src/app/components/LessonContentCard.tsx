import React, { ReactNode } from "react";

interface LessonContentCardProps {
  title: string;
  content: ReactNode;
}

export default function LessonContentCard({ title, content }: LessonContentCardProps) {
  return (
    <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <div className="p-3 text-base bg-white rounded border border-gray-100">
        {content}
      </div>
    </div>
  );
}