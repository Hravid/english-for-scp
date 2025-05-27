import LessonCard from "@/app/components/LessonCard";

export default function Lessons() {
  return (
    <div className="mt-12">
      <h1 className="mb-8 text-2xl font-bold">Lekcje</h1>
      <div className="grid gap-5 md:grid-cols-3">
        <LessonCard 
          title="Present Simple"
          href="/resources/lessons/present_simple"
          description="Codzienność w rytmie serca, gdzie słońce wschodzi, a kot zawsze miauczy."
        />
        
        <LessonCard 
          title="Present Continuous"
          href="/resources/lessons/present_continuous"
          description="Tu i teraz, akcja płynie jak rzeka - ktoś właśnie tańczy albo je pizzę."
        />
        
        <LessonCard 
          title="Past Simple"
          href="/resources/lessons/past_simple"
          description="Dawne historie zapisane w księdze czasu – wczoraj spadł deszcz, a pies szczekał."
        />
        
        <LessonCard 
          title="Past Continuous"
          href="/resources/lessons/past_continuous"
          description="When he called, I was cooking dinner."
        />
        
        <LessonCard 
          title="Present Perfect"
          href="/resources/lessons/present_perfect"
          description="Ślady przeszłości w teraźniejszości – zrobiłem to, więc teraz się tym chwalę."
        />
        
        <LessonCard 
          title="Future Simple"
          href="/resources/lessons/future_simple"
          description="Obietnica jutra – będę astronautą albo zjem całą czekoladę."
        />
        
        <LessonCard 
          title="Conditionals"
          href="/resources/lessons/conditionals"
          description="„Co by było, gdyby?” – gdybyś miał skrzydła, latałbyś jak ptak."
        />
        
        <LessonCard 
          title="Passive Voice"
          href="/resources/lessons/passive_voice"
          description="Akcja bez bohatera – książka została przeczytana, ale kto to zrobił?"
        />
        
        <LessonCard 
          title="Reported Speech"
          href="/resources/lessons/reported_speech"
          description="Echo cudzych słów – powiedział, że pizza jest najlepsza."
        />
      </div>
    </div>
  );
}