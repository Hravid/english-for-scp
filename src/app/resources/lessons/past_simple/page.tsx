export default function PastSimplePage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Past Simple
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Kiedy używamy?</h2>
        <ul className="ml-6 text-base list-disc">
          <li>Mówiąc o czynnościach i wydarzeniach, które miały miejsce w przeszłości i są zakończone.</li>
          <li>Opisując sekwencję zdarzeń w przeszłości.</li>
          <li>Podając daty, konkretne momenty lub okresy w przeszłości.</li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Budowa zdań</h2>
        <div className="mb-2">
          <span className="font-bold">Zdanie twierdzące:</span>
          <span className="ml-2">Podmiot + czasownik w formie przeszłej (regularne: <b>-ed</b>, nieregularne: II forma)</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>I visited</b> London last year.<br />
            <b>She went</b> to the cinema yesterday.
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold">Przeczenie:</span>
          <span className="ml-2">Podmiot + <b>did not (didn't)</b> + czasownik w formie podstawowej</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>He didn't play</b> football.<br />
            <b>We didn't see</b> the movie.
          </div>
        </div>
        <div>
          <span className="font-bold">Pytanie:</span>
          <span className="ml-2"><b>Did</b> + podmiot + czasownik w formie podstawowej?</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>Did you like</b> the food?<br />
            <b>Did she call</b> you?
          </div>
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Najważniejsze zasady</h2>
        <ul className="ml-6 text-base list-disc">
          <li>
            Czasowniki regularne tworzą Past Simple przez dodanie <b>-ed</b>: <span className="text-sm text-gray-700">work → worked, play → played</span>
          </li>
          <li>
            Czasowniki nieregularne mają własną formę (II kolumna): <span className="text-sm text-gray-700">go → went, see → saw</span>
          </li>
          <li>
            W przeczeniach i pytaniach czasownik zawsze w formie podstawowej (bez -ed i II formy).
          </li>
          <li>
            Typowe określenia czasu: <b>yesterday, last week, in 2010, two days ago</b>.
          </li>
        </ul>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Przykłady</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            <span className="font-bold">They visited</span> their grandparents last weekend.
          </li>
          <li className="mb-1">
            <span className="font-bold">He didn't finish</span> his homework.
          </li>
          <li className="mb-1">
            <span className="font-bold">Did you see</span> that film?
          </li>
          <li>
            <span className="font-bold">I was</span> at home yesterday.
          </li>
        </ul>
      </div>
    </div>
  );
}
