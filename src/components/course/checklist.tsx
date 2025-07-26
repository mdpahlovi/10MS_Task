import { ChecklistItem } from "@/types/course";
import Image from "next/image";

export default function CourseChecklist({ checklist }: { checklist: ChecklistItem[] }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">এই কোর্সে যা থাকছে</h2>
            <div className="grid gap-5">
                {checklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-2">
                        <Image src={item.icon} alt={item.text} width={24} height={24} color={item.color} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
