import { PointersSection } from "@/types/course";
import { CheckCircle } from "lucide-react";

export default function CoursePointers({ section }: { section: PointersSection }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">{section.name}</h2>
            <div className="grid grid-cols-2 gap-5">
                {section.values.map((pointer) => (
                    <div key={pointer.id} className="flex items-start gap-2">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: pointer.color }} />
                        <p>{pointer.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
