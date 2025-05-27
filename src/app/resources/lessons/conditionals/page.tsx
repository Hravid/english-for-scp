export default function ConditionalsPage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Conditionals (Okresy warunkowe)
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Czym są okresy warunkowe?</h2>
        <p className="text-base">
          Conditionals to zdania złożone z dwóch części: <b>warunku</b> (zwykle z <i>if</i> lub <i>unless</i>) oraz <b>rezultatu</b>. Służą do wyrażania faktów, możliwości, przypuszczeń i sytuacji hipotetycznych w różnych czasach[1][4].
        </p>
      </div>

      {/* Zero Conditional */}
      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Zero Conditional (prawdy ogólne)</h2>
        <ul className="mb-2 ml-6 text-base list-disc">
          <li>Używamy do wyrażania faktów, praw przyrody, reguł i zwyczajów.</li>
        </ul>
        <div className="mb-1">
          <b>Budowa:</b> If + Present Simple, Present Simple
        </div>
        <div className="text-sm text-gray-700">
          <b>If you heat ice, it melts.</b><br />
          <b>If it rains, the grass gets wet.</b>
        </div>
      </div>

      {/* First Conditional */}
      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">First Conditional (realna przyszłość)</h2>
        <ul className="mb-2 ml-6 text-base list-disc">
          <li>Używamy do mówienia o możliwych sytuacjach w przyszłości i ich skutkach.</li>
        </ul>
        <div className="mb-1">
          <b>Budowa:</b> If + Present Simple, will + bezokolicznik
        </div>
        <div className="text-sm text-gray-700">
          <b>If you study hard, you will pass the exam.</b><br />
          <b>If it rains, I will stay home.</b>
        </div>
      </div>

      {/* Second Conditional */}
      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Second Conditional (hipotetyczna teraźniejszość/przyszłość)</h2>
        <ul className="mb-2 ml-6 text-base list-disc">
          <li>Używamy do mówienia o mało prawdopodobnych lub nierealnych sytuacjach teraz lub w przyszłości.</li>
        </ul>
        <div className="mb-1">
          <b>Budowa:</b> If + Past Simple, would + bezokolicznik
        </div>
        <div className="text-sm text-gray-700">
          <b>If I won a million dollars, I would travel the world.</b><br />
          <b>If she knew the answer, she would tell us.</b>
        </div>
      </div>

      {/* Third Conditional */}
      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Third Conditional (hipotetyczna przeszłość)</h2>
        <ul className="mb-2 ml-6 text-base list-disc">
          <li>Używamy do mówienia o sytuacjach, które mogły się wydarzyć w przeszłości, ale się nie wydarzyły.</li>
        </ul>
        <div className="mb-1">
          <b>Budowa:</b> If + Past Perfect, would have + Past Participle
        </div>
        <div className="text-sm text-gray-700">
          <b>If they had prepared better, they would have won the match.</b><br />
          <b>If I had seen you, I would have said hello.</b>
        </div>
      </div>

      {/* Mixed Conditionals */}
      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Mixed Conditionals (mieszane okresy warunkowe)</h2>
        <ul className="mb-2 ml-6 text-base list-disc">
          <li>Łączą różne czasy w warunku i rezultacie, np. przeszłość + teraźniejszość.</li>
        </ul>
        <div className="mb-1">
          <b>Budowa:</b> If + Past Perfect, would + bezokolicznik (rezultat w teraźniejszości)
        </div>
        <div className="text-sm text-gray-700">
          <b>If I had studied harder, I would have a better job now.</b>
        </div>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Podsumowanie i wskazówki</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            W zdaniach warunkowych często używamy <b>unless</b> (chyba że) zamiast <b>if not</b>.
          </li>
          <li className="mb-1">
            W drugim conditionalu po <b>If I were you</b> dajemy radę: <i>If I were you, I would...</i>
          </li>
          <li>
            Zero i First Conditional opisują realne sytuacje, Second i Third – hipotetyczne.
          </li>
        </ul>
      </div>
    </div>
  );
}
