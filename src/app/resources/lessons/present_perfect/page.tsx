export default function PresentPerfectPage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Present Perfect
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Kiedy używamy?</h2>
        <ul className="ml-6 text-base list-disc">
          <li>Mówiąc o czynnościach, które wydarzyły się w nieokreślonym czasie w przeszłości, ale mają skutek teraz.</li>
          <li>Opisując doświadczenia życiowe ("kiedykolwiek", "nigdy", "już", "jeszcze").</li>
          <li>Gdy czynność rozpoczęła się w przeszłości i trwa do teraz.</li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Budowa zdań</h2>
        <div className="mb-2">
          <span className="font-bold">Zdanie twierdzące:</span>
          <span className="ml-2">Podmiot + <b>have/has</b> + czasownik w III formie (Past Participle)</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>I have visited</b> Rome.<br />
            <b>She has finished</b> her homework.
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold">Przeczenie:</span>
          <span className="ml-2">Podmiot + <b>have/has not (haven't/hasn't)</b> + czasownik w III formie</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>They haven't seen</b> this movie.<br />
            <b>He hasn't called</b> me yet.
          </div>
        </div>
        <div>
          <span className="font-bold">Pytanie:</span>
          <span className="ml-2"><b>Have/Has</b> + podmiot + czasownik w III formie?</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>Have you ever been</b> to London?<br />
            <b>Has she finished</b> her work?
          </div>
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Najważniejsze zasady</h2>
        <ul className="ml-6 text-base list-disc">
          <li>
            Używaj <b>have</b> dla I/you/we/they, <b>has</b> dla he/she/it.
          </li>
          <li>
            Czasownik w III formie (Past Participle): <span className="text-sm text-gray-700">go → gone, see → seen, play → played</span>
          </li>
          <li>
            Nie mówimy kiedy dokładnie coś się stało (nie używamy określonych dat).
          </li>
          <li>
            Typowe określenia: <b>ever, never, already, just, yet, since, for, recently, so far</b>.
          </li>
        </ul>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Przykłady</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            <span className="font-bold">I've just eaten</span> breakfast.
          </li>
          <li className="mb-1">
            <span className="font-bold">She hasn't finished</span> her project yet.
          </li>
          <li className="mb-1">
            <span className="font-bold">Have you ever tried</span> sushi?
          </li>
          <li>
            <span className="font-bold">We've lived</span> here <b>for</b> five years.
          </li>
        </ul>
      </div>
    </div>
  );
}
