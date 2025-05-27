// app/lessons/reported-speech/page.tsx

export default function ReportedSpeechPage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Reported Speech (Mowa zależna)
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Co to jest mowa zależna?</h2>
        <p className="text-base">
          Reported speech to sposób przekazywania cudzych wypowiedzi własnymi słowami, bez cytowania dosłownego. Najczęściej używamy czasownika <b>say</b>, <b>tell</b> lub <b>ask</b>.
        </p>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Jak tworzyć mowę zależną?</h2>
        <ul className="mb-2 ml-6 text-base list-disc">
          <li>Zmiana czasu (czas cofamy o jeden do tyłu – tzw. "backshift").</li>
          <li>Zmiana zaimków i określeń czasu/miejsca.</li>
          <li>Brak cudzysłowu, zdanie podrzędne zwykle po <b>that</b> (można pominąć).</li>
        </ul>
        <div className="text-base">
          <b>Direct speech:</b> "I am tired."<br />
          <b>Reported speech:</b> She said (that) she was tired.
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Zmiany czasów</h2>
        <div className="overflow-x-auto">
          <table className="mb-2 min-w-full text-base bg-white rounded border border-gray-300">
            <thead>
              <tr>
                <th className="px-2 py-1 bg-gray-100 border">Direct speech</th>
                <th className="px-2 py-1 bg-gray-100 border">Reported speech</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-1 border">Present Simple</td>
                <td className="px-2 py-1 border">Past Simple</td>
              </tr>
              <tr>
                <td className="px-2 py-1 border">Present Continuous</td>
                <td className="px-2 py-1 border">Past Continuous</td>
              </tr>
              <tr>
                <td className="px-2 py-1 border">Present Perfect</td>
                <td className="px-2 py-1 border">Past Perfect</td>
              </tr>
              <tr>
                <td className="px-2 py-1 border">Past Simple</td>
                <td className="px-2 py-1 border">Past Perfect</td>
              </tr>
              <tr>
                <td className="px-2 py-1 border">Will</td>
                <td className="px-2 py-1 border">Would</td>
              </tr>
              <tr>
                <td className="px-2 py-1 border">Can</td>
                <td className="px-2 py-1 border">Could</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-sm text-gray-700">
          Przykład: <b>"I will help you"</b> → He said (that) he <b>would help</b> me.
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Zmiany zaimków i określeń</h2>
        <ul className="ml-6 text-base list-disc">
          <li>
            <b>this/these</b> → <b>that/those</b>
          </li>
          <li>
            <b>now</b> → <b>then</b>
          </li>
          <li>
            <b>today</b> → <b>that day</b>
          </li>
          <li>
            <b>tomorrow</b> → <b>the next day</b>
          </li>
          <li>
            <b>yesterday</b> → <b>the day before</b>
          </li>
          <li>
            <b>here</b> → <b>there</b>
          </li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Przykłady</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            <b>Direct:</b> "I'm learning English."<br />
            <b>Reported:</b> She said (that) she was learning English.
          </li>
          <li className="mb-1">
            <b>Direct:</b> "We have finished."<br />
            <b>Reported:</b> They said (that) they had finished.
          </li>
          <li className="mb-1">
            <b>Direct:</b> "Will you help me?"<br />
            <b>Reported:</b> He asked if I would help him.
          </li>
          <li>
            <b>Direct:</b> "I can swim."<br />
            <b>Reported:</b> She said (that) she could swim.
          </li>
        </ul>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Wskazówki i wyjątki</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            Jeśli cytowana wypowiedź jest wciąż aktualna, czasów nie musisz cofać.
          </li>
          <li className="mb-1">
            W pytaniach i rozkazach zmienia się szyk zdania: <i>He asked me where I lived.</i>, <i>She told me to sit down.</i>
          </li>
          <li>
            Po <b>tell</b> zawsze podajemy osobę: <i>She told me</i>. Po <b>say</b> – nie: <i>She said (that)...</i>
          </li>
        </ul>
      </div>
    </div>
  );
}
