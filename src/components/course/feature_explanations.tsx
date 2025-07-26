import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FeatureExplanationsSection } from "@/types/course";

export default function CourseFeatureExplanations({ section }: { section: FeatureExplanationsSection }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">{section.name}</h2>
            <div className="grid grid-cols-1 gap-5">
                {section.values.map((pointer) => (
                    <Card key={pointer.id}>
                        <CardHeader>{pointer.title}</CardHeader>
                        <CardContent>
                            {pointer.checklist.map((item, idx) => (
                                <p key={idx}>{item}</p>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
