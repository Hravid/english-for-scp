import Link from "next/link";
import LessonCard from "@/app/components/LessonCard";

export default function Lessons() {
  return (
    <div className="mt-12">
      <h1 className="text-2xl font-bold mb-8">Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LessonCard 
          title="Present Simple"
          href="/lessons/present_simple"
          description="Codzienność w rytmie serca, gdzie słońce wschodzi, a kot zawsze miauczy."
        />
        
        <LessonCard 
          title="Present Continuous"
          href="/lessons/present_continuous"
          description="Tu i teraz, akcja płynie jak rzeka - ktoś właśnie tańczy albo je pizzę."
        />
        
        <LessonCard 
          title="Past Simple"
          href="/lessons/past_simple"
          description="Dawne historie zapisane w księdze czasu – wczoraj spadł deszcz, a pies szczekał."
        />
        
        <LessonCard 
          title="Past Continuous"
          href="/lessons/past_continuous"
          description="When he called, I was cooking dinner."
        />
        
        <LessonCard 
          title="Present Perfect"
          href="/lessons/present_perfect"
          description="Ślady przeszłości w teraźniejszości – zrobiłem to, więc teraz się tym chwalę."
        />
        
        <LessonCard 
          title="Future Simple"
          href="/lessons/future_simple"
          description="Obietnica jutra – będę astronautą albo zjem całą czekoladę."
        />
        
        <LessonCard 
          title="Conditionals"
          href="/lessons/conditionals"
          description="„Co by było, gdyby?” – gdybyś miał skrzydła, latałbyś jak ptak."
        />
        
        <LessonCard 
          title="Passive Voice"
          href="/lessons/passive_voice"
          description="Akcja bez bohatera – książka została przeczytana, ale kto to zrobił?"
        />
        
        <LessonCard 
          title="Reported Speech"
          href="/lessons/reported_speech"
          description="Echo cudzych słów – powiedział, że pizza jest najlepsza."
        />
      </div>
    </div>
  );
}