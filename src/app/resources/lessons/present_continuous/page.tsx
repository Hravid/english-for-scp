export default function PresentContinuousPage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Present Continuous
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Kiedy używamy?</h2>
        <ul className="ml-6 text-base list-disc">
          <li>Gdy mówimy o czynnościach dziejących się w tej chwili, teraz.</li>
          <li>Opisujemy sytuacje tymczasowe lub zmieniające się.</li>
          <li>Wyrażamy irytację na powtarzające się zachowania (z always).</li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Budowa zdań</h2>
        <div className="mb-2">
          <span className="font-bold">Zdanie twierdzące:</span>
          <span className="ml-2">Podmiot + <b>am/is/are</b> + czasownik z końcówką <b>-ing</b></span>
          <div className="mt-1 text-sm text-gray-700">
            <b>I am reading</b> a book.<br />
            <b>She is working</b> now.<br />
            <b>They are playing</b> football.
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold">Przeczenie:</span>
          <span className="ml-2">Podmiot + <b>am/is/are not</b> + czasownik z <b>-ing</b></span>
          <div className="mt-1 text-sm text-gray-700">
            <b>He isn't sleeping</b> at the moment.<br />
            <b>We aren't watching</b> TV.
          </div>
        </div>
        <div>
          <span className="font-bold">Pytanie:</span>
          <span className="ml-2"><b>Am/Is/Are</b> + podmiot + czasownik z <b>-ing</b>?</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>Are you listening</b> to me?<br />
            <b>Is she coming</b> with us?
          </div>
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Najważniejsze zasady</h2>
        <ul className="ml-6 text-base list-disc">
          <li>
            Czasownik główny zawsze z końcówką <b>-ing</b>.<br />
            <span className="text-sm text-gray-700">run → running, write → writing</span>
          </li>
          <li>
            Zawsze używamy odpowiedniej formy <b>to be</b> (am/is/are) przed czasownikiem.<br />
            <span className="text-sm text-gray-700">He <b>is</b> talking. I <b>am</b> learning.</span>
          </li>
          <li>
            Typowe określenia czasu: <b>now, at the moment, right now, today</b>.
          </li>
          <li>
            Przy czasownikach wyrażających stany (np. know, like, believe) zwykle NIE używamy Present Continuous.
          </li>
        </ul>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Przykłady</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            <span className="font-bold">I'm studying</span> English now.
          </li>
          <li className="mb-1">
            <span className="font-bold">She's not wearing</span> a jacket.
          </li>
          <li className="mb-1">
            <span className="font-bold">Are you waiting</span> for someone?
          </li>
          <li>
            <span className="font-bold">They're always losing</span> their keys! (irytacja)
          </li>
        </ul>
      </div>
    </div>
  );
}
