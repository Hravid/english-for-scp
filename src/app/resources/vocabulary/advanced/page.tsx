'use client'
import React, { useEffect, useState } from "react";

interface Card {
  id: number;
  word: string;
  translation: string;
}

const KNOWN_KEY = "knownFlashcards";
const MIN_SET = 1;
const MAX_SET = 20;

export default function FlashcardsPage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownIds, setKnownIds] = useState<number[]>([]);
  const [dontKnowCount, setDontKnowCount] = useState(0);
  const [setNumber, setSetNumber] = useState(1);

  useEffect(() => {
    setCards([]);
    fetch(`/data/flashcards_${setNumber}.json`)
      .then(res => res.json())
      .then(data => setCards(data));
    setCurrent(0);
    setFlipped(false);
    setDontKnowCount(0);
    const stored = localStorage.getItem(`${KNOWN_KEY}_${setNumber}`);
    if (stored) setKnownIds(JSON.parse(stored));
    else setKnownIds([]);
  }, [setNumber]);

  const filteredCards = cards.filter(card => !knownIds.includes(card.id));
  const allKnown = cards.length > 0 && filteredCards.length === 0;

  const handleFlip = () => setFlipped(f => !f);

  const handleKnow = () => {
    const newKnown = [...knownIds, filteredCards[current].id];
    setKnownIds(newKnown);
    localStorage.setItem(`${KNOWN_KEY}_${setNumber}`, JSON.stringify(newKnown));
    nextCard(filteredCards, newKnown);
  };

  const handleDontKnow = () => {
    setDontKnowCount(k => k + 1);
    nextCard(filteredCards, knownIds);
  };

  const nextCard = (filtered: Card[], known: number[]) => {
    setFlipped(false);
    if (filtered.length === 1) {
      setCurrent(0);
    } else {
      setCurrent(c => (c + 1) % (filtered.length - (known.length > knownIds.length ? 1 : 0)));
    }
  };

  const handlePrevSet = () => setSetNumber(n => Math.max(MIN_SET, n - 1));
  const handleNextSet = () => setSetNumber(n => Math.min(MAX_SET, n + 1));

  // Pasek wyboru zestawu (na dole)
  const SetSelector = (
    <div className="flex gap-4 items-center mt-6">
      <button
        onClick={handlePrevSet}
        className="px-3 py-1 text-2xl bg-gray-300 rounded hover:bg-gray-400"
        disabled={setNumber === MIN_SET}>
        &#8592;
      </button>
      <span className="w-12 text-xl font-bold text-center">{setNumber}</span>
      <button
        onClick={handleNextSet}
        className="px-3 py-1 text-2xl bg-gray-300 rounded hover:bg-gray-400"
        disabled={setNumber === MAX_SET}>
        &#8594;
      </button>
      <span className="ml-2 text-gray-600">Zestaw</span>
    </div>
  );

  if (cards.length === 0) {
    return <div className="flex justify-center items-center min-h-screen">Ładowanie fiszek...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Usunięto SetSelector z góry */}

      <div className="flex flex-col items-center w-full max-w-xs">
        {allKnown ? (
          <>
            <div className="mb-4 text-2xl font-bold text-center">
              Gratulacje! Znasz już wszystkie fiszki z zestawu {setNumber}!
            </div>
            <div className="flex gap-8 mb-4 text-lg">
              <span className="font-bold text-green-700">Znam: {knownIds.length}</span>
              <span className="font-bold text-red-700">Nie znam: {dontKnowCount}</span>
            </div>
          </>
        ) : (
          <>
            {/* Fiszka */}
            <div
              className="relative mb-8 w-72 h-44 cursor-pointer"
              onClick={handleFlip}
              style={{ perspective: "1000px" }}>
              <div
                className="w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped ? "rotateY(180deg)" : "none",
                }}>
                {/* Front */}
                <div
                  className="flex absolute inset-0 justify-center items-center text-2xl font-semibold bg-white rounded-lg border-2 border-gray-200 shadow-lg"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}>
                  {filteredCards[current].word}
                </div>
                {/* Back */}
                <div
                  className="flex absolute inset-0 justify-center items-center text-2xl font-semibold bg-white rounded-lg border-2 border-gray-200 shadow-lg"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}>
                  {filteredCards[current].translation}
                </div>
              </div>
            </div>

            {/* Przycisk odwracania */}
            <button
              className="px-6 py-2 mb-6 font-semibold text-white bg-blue-600 rounded shadow transition hover:bg-blue-700"
              onClick={e => { e.stopPropagation(); handleFlip(); }}>
              Odwróć
            </button>

            {/* Przyciski Znam / Nie znam */}
            <div className="flex gap-4 mb-8">
              <button
                className="px-6 py-2 font-semibold text-white bg-green-500 rounded shadow transition hover:bg-green-600"
                onClick={e => { e.stopPropagation(); handleKnow(); }}>
                Znam
              </button>
              <button
                className="px-6 py-2 font-semibold text-white bg-red-500 rounded shadow transition hover:bg-red-600"
                onClick={e => { e.stopPropagation(); handleDontKnow(); }}>
                Nie znam
              </button>
            </div>

            {/* Licznik */}
            <div className="flex gap-8 text-lg">
              <span className="font-bold text-green-700">Znam: {knownIds.length}</span>
              <span className="font-bold text-red-700">Nie znam: {dontKnowCount}</span>
            </div>
          </>
        )}

        {/* Pasek wyboru zestawu na dole */}
        {SetSelector}
      </div>
    </div>
  );
}
