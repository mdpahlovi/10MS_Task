import { Card, CardContent } from "@/components/ui/card";
import { FeatureExplanationsSection } from "@/types/course";
import CheckMark from "../icons/check_mark";
import Image from "next/image";

export default function CourseFeatureExplanations({ section }: { section: FeatureExplanationsSection }) {
    return (
        <section>
            <h2 className="mb-4">{section.name}</h2>
            <div className="grid grid-cols-1 gap-5">
                {section.values.map((feature) => (
                    <Card key={feature.id}>
                        <CardContent className="grid grid-cols-3">
                            <div className="col-span-2">
                                <h4 className="mb-5">{feature.title}</h4>
                                <div className="flex flex-col gap-y-2">
                                    {feature.checklist.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <CheckMark />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Image src={feature.file_url} alt={feature.title} width={512} height={512} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
