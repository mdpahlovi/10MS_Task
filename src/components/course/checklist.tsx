import { ChecklistItem } from "@/types/course";
import Image from "next/image";

export default function CourseChecklist({ checklist }: { checklist: ChecklistItem[] }) {
    return (
        <section>
            <h2 className="mb-4">এই কোর্সে যা থাকছে</h2>
            <div className="grid gap-y-2">
                {checklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-2">
                        <Image src={item.icon} alt={item.text} width={20} height={20} color={item.color} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
