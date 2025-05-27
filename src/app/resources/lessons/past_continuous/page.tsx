export default function PastContinuousPage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Past Continuous
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Kiedy używamy?</h2>
        <ul className="ml-6 text-base list-disc">
          <li>Opisujemy czynności, które trwały w określonym momencie w przeszłości.</li>
          <li>Gdy jedna czynność była w trakcie, a inna ją przerwała (Past Continuous + Past Simple).</li>
          <li>Opowiadamy o tle wydarzeń, np. co ktoś robił w danym czasie.</li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Budowa zdań</h2>
        <div className="mb-2">
          <span className="font-bold">Zdanie twierdzące:</span>
          <span className="ml-2">Podmiot + <b>was/were</b> + czasownik z końcówką <b>-ing</b></span>
          <div className="mt-1 text-sm text-gray-700">
            <b>I was reading</b> a book at 8 p.m.<br />
            <b>They were playing</b> football yesterday afternoon.
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold">Przeczenie:</span>
          <span className="ml-2">Podmiot + <b>wasn't/weren't</b> + czasownik z <b>-ing</b></span>
          <div className="mt-1 text-sm text-gray-700">
            <b>He wasn't sleeping</b> when I called.<br />
            <b>We weren't watching</b> TV.
          </div>
        </div>
        <div>
          <span className="font-bold">Pytanie:</span>
          <span className="ml-2"><b>Was/Were</b> + podmiot + czasownik z <b>-ing</b>?</span>
          <div className="mt-1 text-sm text-gray-700">
            <b>Were you listening</b> to music?<br />
            <b>Was she working</b> at 10 o'clock?
          </div>
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Najważniejsze zasady</h2>
        <ul className="ml-6 text-base list-disc">
          <li>
            Używaj <b>was</b> dla I/he/she/it, <b>were</b> dla you/we/they.
          </li>
          <li>
            Czasownik główny zawsze z końcówką <b>-ing</b>: <span className="text-sm text-gray-700">run → running, write → writing</span>
          </li>
          <li>
            Często używamy z określeniami czasu: <b>while, when, at 5 o'clock, yesterday at this time</b>.
          </li>
          <li>
            Past Continuous często łączy się z Past Simple, np. <span className="text-sm text-gray-700">I was watching TV when he called.</span>
          </li>
        </ul>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Przykłady</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            <span className="font-bold">She was cooking</span> dinner when I arrived.
          </li>
          <li className="mb-1">
            <span className="font-bold">We weren't sleeping</span> at midnight.
          </li>
          <li className="mb-1">
            <span className="font-bold">Were you playing</span> computer games yesterday evening?
          </li>
          <li>
            <span className="font-bold">I was driving</span> to work at 8 a.m.
          </li>
        </ul>
      </div>
    </div>
  );
}
