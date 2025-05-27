export default function PassiveVoicePage() {
  return (
    <div className="p-6 mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Passive Voice (Strona bierna)
      </h1>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Kiedy używamy strony biernej?</h2>
        <ul className="ml-6 text-base list-disc">
          <li>Gdy nie wiemy, nie chcemy lub nie musimy powiedzieć, kto wykonuje czynność.</li>
          <li>Kiedy ważniejszy jest sam fakt wykonania czynności niż jej sprawca.</li>
          <li>Często w tekstach naukowych, oficjalnych, instrukcjach.</li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Budowa strony biernej</h2>
        <div className="mb-2">
          <span className="font-bold">Podmiot + odpowiednia forma "to be" + Past Participle (III forma czasownika) [+ by + sprawca]</span>
        </div>
        <div className="text-base">
          <b>Active:</b> The chef cooks the meal.<br />
          <b>Passive:</b> The meal is cooked (by the chef).
        </div>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Strona bierna w różnych czasach</h2>
        <ul className="mb-2 ml-6 text-base list-disc">
          <li>
            <b>Present Simple:</b> am/is/are + III forma<br />
            <span className="text-sm text-gray-700">The letter is sent every week.</span>
          </li>
          <li>
            <b>Past Simple:</b> was/were + III forma<br />
            <span className="text-sm text-gray-700">The window was broken yesterday.</span>
          </li>
          <li>
            <b>Future Simple:</b> will be + III forma<br />
            <span className="text-sm text-gray-700">The results will be announced soon.</span>
          </li>
          <li>
            <b>Present Perfect:</b> has/have been + III forma<br />
            <span className="text-sm text-gray-700">The work has been finished.</span>
          </li>
        </ul>
      </div>

      <div className="p-4 mb-6 bg-gray-200 rounded border-2 border-gray-200 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-blue-700">Najważniejsze zasady</h2>
        <ul className="ml-6 text-base list-disc">
          <li>
            Sprawca czynności (jeśli ważny) pojawia się po <b>by</b>: <span className="text-sm text-gray-700">The cake was eaten <b>by Tom</b>.</span>
          </li>
          <li>
            W stronie biernej najważniejszy jest obiekt czynności, nie jej wykonawca.
          </li>
          <li>
            Używaj poprawnej formy czasownika <b>to be</b> odpowiedniej do czasu zdania.
          </li>
          <li>
            Niektóre czasowniki nie mają strony biernej (np. czasowniki nieprzechodnie).
          </li>
        </ul>
      </div>

      <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-blue-700">Przykłady</h2>
        <ul className="ml-4 text-base">
          <li className="mb-1">
            <span className="font-bold">English is spoken</span> all over the world.
          </li>
          <li className="mb-1">
            <span className="font-bold">The house was built</span> in 1920.
          </li>
          <li className="mb-1">
            <span className="font-bold">The project will be completed</span> next month.
          </li>
          <li>
            <span className="font-bold">The documents have been sent</span> by email.
          </li>
        </ul>
      </div>
    </div>
  );
}
