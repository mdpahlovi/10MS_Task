import CheckMark from "@/components/icons/check_mark";
import { PointersSection } from "@/types/course";

export default function CoursePointers({ section }: { section: PointersSection }) {
    return (
        <section>
            <h2 className="mb-4">{section.name}</h2>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-2 sm:gap-y-1">
                {section.values.map((pointer) => (
                    <div key={pointer.id} className="flex items-start gap-2">
                        <CheckMark color={pointer.color} />
                        <p>{pointer.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
