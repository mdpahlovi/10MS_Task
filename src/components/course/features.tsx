import { Card, CardContent } from "@/components/ui/card";
import { FeaturesSection } from "@/types/course";
import Image from "next/image";

export default function CourseFeatures({ section }: { section: FeaturesSection }) {
    return (
        <section>
            <h2 className="mb-4">{section.name}</h2>
            <div className="grid sm:grid-cols-2 gap-5">
                {section.values.map((feature) => (
                    <Card key={feature.id}>
                        <CardContent className="flex flex-col gap-5">
                            <Image src={feature.icon} alt={feature.title} width={48} height={48} />
                            <div>
                                <h4 className="mb-1">{feature.title}</h4>
                                <p>{feature.subtitle}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
