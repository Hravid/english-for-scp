import Link from "next/link";

interface LessonCardProps {
  title: string;
  href: string;
  description: string;
}

export default function LessonCard({ title, href, description }: LessonCardProps) {
  return (
    <div className="p-4 bg-gray-200 rounded border-2 border-gray-200 shadow-sm transition-shadow hover:shadow-md">
      <Link href={href} className="block mb-2 text-lg font-medium hover:underline">
        {title}
      </Link>
      <div className="p-3 text-base bg-white rounded border border-gray-100">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {description}
        </p>
      </div>
    </div>
  );
}