import Link from "next/link";

interface BaseContentCardProps {
    title: string;
    href: string;
}

export default function BaseContentCard({title, href}: BaseContentCardProps) {
    return (
        <div className="flex flex-1 justify-center items-center p-4 w-full text-base bg-white rounded border border-gray-100 sm:w-auto">
            <Link href={href} className="text-center text-transparent underline bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 decoration-blue-600">
                {title}
            </Link>
        </div>
    );
}
