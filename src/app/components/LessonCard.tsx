import Link from "next/link";

interface LessonCardProps {
  title: string;
  href: string;
  description: string;
}

export default function LessonCard({ title, href, description }: LessonCardProps) {
  return (
    <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow bg-gray-200">
      <Link href={href} className="text-lg font-medium hover:underline block mb-2">
        {title}
      </Link>
      <div className="text-base p-3 border border-gray-100 rounded bg-white">
        <p className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {description}
        </p>
      </div>
    </div>
  );
}