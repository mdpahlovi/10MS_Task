import { InstructorsSection } from "@/types/course";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function CourderInstructors({ section }: { section: InstructorsSection }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">{section.name}</h2>
            <div className="grid grid-cols-1 gap-6">
                {section.values.map((instructor) => (
                    <Card key={Math.random()}>
                        <CardContent>
                            <div className="flex items-center gap-5">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    width={96}
                                    height={96}
                                    className="rounded-full object-cover object-center"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{instructor.name}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: instructor.description }} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
