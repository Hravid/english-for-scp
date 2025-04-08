import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
       <div className="relative z-10 flex flex-col gap-6 py-12 px-6 md:gap-8 md:py-16 md:justify-evenly md:min-h-[calc(100vh-80px)]">
        <div className="space-y-4 mb-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">
            <span className="text-black">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text drop-shadow-sm">English Lessons</span>
            {" "}<span className="text-black">💂</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-center -mt-1 md:-mt-2 text-indigo-700">
            for Super Cool People
          </h2>
        </div>
        
        <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-100">
          <p className="text-lg md:text-2xl text-center">Your gateway to perfecting English <em className="text-indigo-600 font-medium">(hopefully)</em>.</p>
          <p className="text-lg md:text-2xl text-center">
            We will cover important <span className="text-blue-600 font-bold">words</span> and 
            <span className="text-purple-600 font-bold"> tenses</span> and 
            <span className="text-indigo-600 font-bold"> EVERYTHING</span>.
          </p>
          <div className="py-3 px-4 bg-red-50 rounded-lg border border-red-200 mt-4">
            <p className="text-lg md:text-2xl text-red-500 font-bold text-center animate-pulse">🚨 NO POLISH ALLOWED 🚨</p>
            <p className="text-lg md:text-xl text-center italic text-gray-600">(<i>i lied</i>, lessons are in Polish)</p>
          </div>
        </div>
        
        <div className="mt-4 space-y-3 md:space-y-4 max-w-3xl mx-auto backdrop-blur-sm rounded-xl p-6 shadow-md border border-indigo-100">
          <p className="text-base md:text-xl text-center">Having an account tracks your progress and assigns tests.</p>
          <p className="text-base md:text-lg text-center text-gray-600">(not really, but that's how it's set up (not yet 💀💀💀))</p>
          <p className="text-base md:text-xl text-center">If bugs arise, <strong className="text-red-500">do not contact me</strong> - this project tired me.</p>
          <p className="text-base md:text-xl font-bold text-center">HOPE YOU LEARN <strong className="text-yellow-600 text-2xl animate-bounce inline-block">PLENTY</strong> 😼</p>
        </div>
    
        <div className="my-8 md:my-10">
          <Link href="/lessons">
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-xl md:text-2xl text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 py-4 px-8 block mx-auto shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95">
              🔥 START YOUR GRIND NOW! 🔥
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}