import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden relative min-h-screen bg-white">
       <div className="relative z-10 flex flex-col gap-6 py-12 px-6 md:gap-8 md:py-16 md:justify-evenly md:min-h-[calc(100vh-80px)]">
        <div className="mb-6 space-y-4 animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-center md:text-5xl">
            <span className="text-black">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm">English Lessons</span>
            {" "}<span className="text-black">💂</span>
          </h1>
          <h2 className="-mt-1 text-2xl font-bold text-center text-indigo-700 md:text-3xl md:-mt-2">
            for Super Cool People
          </h2>
        </div>
        
        <div className="p-6 mx-auto space-y-3 max-w-3xl rounded-xl border border-indigo-100 shadow-lg backdrop-blur-sm md:space-y-4 bg-white/70">
          <p className="text-lg text-center md:text-2xl">Your gateway to perfecting English <em className="font-medium text-indigo-600">(hopefully)</em>.</p>
          <p className="text-lg text-center md:text-2xl">
            We will cover important <span className="font-bold text-blue-600">words</span> and 
            <span className="font-bold text-purple-600"> tenses</span> and 
            <span className="font-bold text-indigo-600"> EVERYTHING</span>.
          </p>
          <div className="px-4 py-3 mt-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-lg font-bold text-center text-red-500 animate-pulse md:text-2xl">🚨 NO POLISH ALLOWED 🚨</p>
            <p className="text-lg italic text-center text-gray-600 md:text-xl">(<i>i lied</i>, lessons are in Polish)</p>
          </div>
        </div>
        
        <div className="p-6 mx-auto mt-4 space-y-3 max-w-3xl rounded-xl border border-indigo-100 shadow-md backdrop-blur-sm md:space-y-4">
          <p className="text-base text-center md:text-xl">Having an account tracks your progress and assigns tests.</p>
          <p className="text-base text-center text-gray-600 md:text-lg">(not really, but that's how it's set up (not yet 💀💀💀))</p>
          <p className="text-base text-center md:text-xl">If bugs arise, <strong className="text-red-500">do not contact me</strong> - this project tired me.</p>
          <p className="text-base font-bold text-center md:text-xl">HOPE YOU LEARN <strong className="inline-block text-2xl text-yellow-600 animate-bounce">PLENTY</strong> 😼</p>
        </div>
    
        <div className="my-8 md:my-10">
          <Link href="/resources/lessons">
            <button className="block px-8 py-4 mx-auto text-xl text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg shadow-lg transition duration-300 transform md:text-2xl hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95">
              🔥 START YOUR GRIND NOW! 🔥
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}