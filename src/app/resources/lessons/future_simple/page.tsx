export default function FutureSimplePage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Future Simple
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Kiedy używamy?</h2>
        <ul className="ml-6 text-base list-disc">
          <li>Mówiąc o czynnościach, które wydarzą się w przyszłości.</li>
          <li>Przewidywania, obietnice, spontaniczne decyzje.</li>
          <li>Wyrażanie nadziei, obaw, gróźb i ofert.</li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Budowa zdań</h2>
        <div className="mb-2">
          <span className="font-bold">Zdanie twierdzące:</span>
          <span className="ml-2">Podmiot + <b>will</b> + czasownik (forma podstawowa)</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>I will help</b> you.<br />
            <b>She will call</b> you later.
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold">Przeczenie:</span>
          <span className="ml-2">Podmiot + <b>will not (won't)</b> + czasownik</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>He won't come</b> to the party.<br />
            <b>We will not forget</b> this day.
          </div>
        </div>
        <div>
          <span className="font-bold">Pytanie:</span>
          <span className="ml-2"><b>Will</b> + podmiot + czasownik?</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>Will you join</b> us?<br />
            <b>Will it rain</b> tomorrow?
          </div>
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Najważniejsze zasady</h2>
        <ul className="ml-6 text-base list-disc">
          <li>
            <b>Will</b> jest takie samo dla wszystkich osób.
          </li>
          <li>
            Czasownik zawsze w formie podstawowej (bez końcówek).
          </li>
          <li>
            Typowe określenia czasu: <b>tomorrow, next week, in a year, soon</b>.
          </li>
          <li>
            Spontaniczne decyzje podejmowane w chwili mówienia: <span className="text-sm text-gray-700">I'm thirsty. I will drink some water.</span>
          </li>
        </ul>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Przykłady</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            <span className="font-bold">I'll call</span> you when I arrive.
          </li>
          <li className="mb-1">
            <span className="font-bold">She won't agree</span> to this plan.
          </li>
          <li className="mb-1">
            <span className="font-bold">Will they come</span> to the meeting?
          </li>
          <li>
            <span className="font-bold">We will see</span> what happens.
          </li>
        </ul>
      </div>
    </div>
  );
}
