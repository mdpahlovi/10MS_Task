import { cleanUpHtml } from "@/lib/cleanUpHtml";
import { InstructorsSection } from "@/types/course";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function CourderInstructors({ section }: { section: InstructorsSection }) {
    return (
        <section>
            <h2 className="mb-4">{section.name}</h2>
            <div className="grid grid-cols-1 gap-6">
                {section.values.map((instructor) => (
                    <Card key={Math.random()}>
                        <CardContent className="flex items-center gap-5">
                            <Image src={instructor.image} alt={instructor.name} width={96} height={96} />
                            <div>
                                <h4 className="mb-1">{instructor.name}</h4>
                                <div dangerouslySetInnerHTML={{ __html: cleanUpHtml(instructor.description) }} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
