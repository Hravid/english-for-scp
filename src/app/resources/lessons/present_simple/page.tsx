export default function PresentSimplePage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Present Simple
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Kiedy używamy?</h2>
        <ul className="ml-6 text-base list-disc">
          <li>Gdy mówimy o faktach, nawykach i rutynach.</li>
          <li>Opisujemy rzeczy ogólnie prawdziwe lub powtarzające się.</li>
          <li>W instrukcjach, przepisach, rozkładach jazdy.</li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Budowa zdań</h2>
        <div className="mb-2">
          <span className="font-bold">Zdanie twierdzące:</span>
          <span className="ml-2">Podmiot + czasownik (w 3. os. l.poj. dodajemy <b>-s</b>)</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>I work</b> every day. <br />
            <b>She works</b> in a bank.
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold">Przeczenie:</span>
          <span className="ml-2">Podmiot + <b>do/does not</b> + czasownik</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>I do not (don't) like</b> coffee. <br />
            <b>He does not (doesn't) play</b> football.
          </div>
        </div>
        <div>
          <span className="font-bold">Pytanie:</span>
          <span className="ml-2"><b>Do/Does</b> + podmiot + czasownik</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>Do you speak</b> English? <br />
            <b>Does she live</b> here?
          </div>
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Najważniejsze zasady</h2>
        <ul className="ml-6 text-base list-disc">
          <li>
            W 3. osobie liczby pojedynczej (<b>he, she, it</b>) do czasownika dodajemy <b>-s</b> lub <b>-es</b>.<br />
            <span className="text-sm text-gray-700">She <b>reads</b> books. He <b>goes</b> to school.</span>
          </li>
          <li>
            W przeczeniach i pytaniach używamy <b>do/does</b>, a czasownik pozostaje w formie podstawowej.<br />
            <span className="text-sm text-gray-700">He <b>doesn't like</b> tea. <b>Does</b> it work?</span>
          </li>
          <li>
            Często używane określenia czasu: <b>always, usually, often, sometimes, never, every day</b>.
          </li>
        </ul>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Przykłady</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            <span className="font-bold">I get up</span> at 7 o'clock every day.
          </li>
          <li className="mb-1">
            <span className="font-bold">She doesn't watch</span> TV in the morning.
          </li>
          <li className="mb-1">
            <span className="font-bold">Do you like</span> pizza?
          </li>
          <li>
            <span className="font-bold">The train leaves</span> at 6:30.
          </li>
        </ul>
      </div>
    </div>
  );
}
