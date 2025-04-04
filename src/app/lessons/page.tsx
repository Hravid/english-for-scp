import Link from "next/link";

export default function Lessons() {
  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold mb-8">Lessons</h1>
      
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Item 1 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/present_simple" className="text-lg font-medium hover:underline block mb-2">
            Present Simple
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            Codzienność w rytmie serca, gdzie słońce wschodzi, a kot zawsze miauczy.
          </div>
        </div>
        
        {/* Item 2 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/present_continuous" className="text-lg font-medium hover:underline block mb-2">
            Present Continuous
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            Tu i teraz, akcja płynie jak rzeka - ktoś właśnie tańczy albo je pizzę.
          </div>
        </div>
        
        {/* Item 3 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/past_simple" className="text-lg font-medium hover:underline block mb-2">
            Past Simple
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            Dawne historie zapisane w księdze czasu – wczoraj spadł deszcz, a pies szczekał.
          </div>
        </div>
        
        {/* Item 4 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/past_continuous" className="text-lg font-medium hover:underline block mb-2">
            Past Continuous
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            Przeszłość w ruchu, jak film w zwolnionym tempie – ja czytałem, gdy ty śpiewałaś.
          </div>
        </div>
        
        {/* Item 5 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/present_perfect" className="text-lg font-medium hover:underline block mb-2">
            Present Perfect
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            Ślady przeszłości w teraźniejszości – zrobiłem to, więc teraz się tym chwalę.
          </div>
        </div>
        
        {/* Item 6 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/future_simple" className="text-lg font-medium hover:underline block mb-2">
            Future Simple
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            Obietnica jutra – będę astronautą albo zjem całą czekoladę.
          </div>
        </div>
        
        {/* Item 7 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/conditionals" className="text-lg font-medium hover:underline block mb-2">
            Conditionals
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            „Co by było, gdyby?” – gdybyś miał skrzydła, latałbyś jak ptak.
          </div>
        </div>
        
        {/* Item 8 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/passive_voice" className="text-lg font-medium hover:underline block mb-2">
            Passive Voice
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            Akcja bez bohatera – książka została przeczytana, ale kto to zrobił?
          </div>
        </div>
        
        {/* Item 9 */}
        <div className="border-2 border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition-shadow">
          <Link href="/lessons/reported_speech" className="text-lg font-medium hover:underline block mb-2">
            Reported Speech
          </Link>
          <div className="text-base p-3 border border-gray-200 rounded bg-gray-50">
            Echo cudzych słów – powiedział, że pizza jest najlepsza.
        </div>
      </div>
      </div>
    </div>
  );
}