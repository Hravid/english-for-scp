import BaseCard from "@/app/components/BaseCard"
import BaseContentCard from "@/app/components/BaseContentCard"

export default function Vocabulary() {
    return(
        <div className="mt-12">
            <div className="gap-5 px-10">
                <div>
                    <BaseCard title={"Fiszki"}>
                        <BaseContentCard title="TOP 1000" href="/resources/vocabulary/top_1000"/>
                        <BaseContentCard title="Tematyczne (work in progress)" href={"/resources/vocabulary/by_topic"}/>
                        <BaseContentCard title="Zaawansowane" href={"/resources/vocabulary/advanced"}/>
                    </BaseCard>
                </div>
            </div>
        </div>
    )
}