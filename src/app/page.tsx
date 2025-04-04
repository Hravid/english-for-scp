import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 py-8 px-4 md:gap-6 md:justify-evenly md:min-h-[calc(100vh-80px)]">
      <div className="space-y-6 mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center">🏴󠁧󠁢󠁥󠁮󠁧󠁿 English Lessons 💂‍♂️</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-center -mt-1 md:-mt-2">for Super Cool People</h2>
      </div>
      
      <div className="space-y-1 md:space-y-2 max-w-3xl mx-auto">
        <p className="text-lg md:text-2xl text-center">Your gateway to perfecting English <em>(hopefully)</em>.</p>
        <p className="text-lg md:text-2xl text-center">We will cover important <strong>words</strong> and <strong>tenses</strong> and <strong>EVERYTHING</strong>.</p>
        <p className="text-lg md:text-2xl text-red-500 font-bold text-center mt-3 md:mt-4">🚨 NO POLISH ALLOWED 🚨</p>
        <p className="text-lg md:text-2xl text-center">(<i>i lied</i>, lessons are in Polish)</p>
      </div>
      
      <div className="mt-4 space-y-2 md:space-y-3 max-w-3xl mx-auto">
        <p className="text-base md:text-xl text-center">Having an account tracks your progress and assigns tests.</p>
        <p className="text-base md:text-xl text-center">(not really, but that's how it's set up)</p>
        <p className="text-base md:text-xl text-center">If bugs arise, <strong>do not contact me</strong> - this project tired me.</p>
        <p className="text-base md:text-xl font-bold text-center">HOPE YOU LEARN <strong className="text-yellow-400">PLENTY</strong> 😼</p>
      </div>
      
      <div className="my-4 md:my-6">
        <Link href="/lessons">
          <button className="bg-[#9A8F97] text-xl md:text-2xl text-white rounded-md hover:bg-[#ff0000] transition duration-500 py-3 px-6 block mx-auto">
            🔥START YOUR GRIND NOW!🔥
          </button>
        </Link>
      </div>
    </div>
  );
}