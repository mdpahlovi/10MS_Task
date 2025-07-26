import { Card, CardContent } from "@/components/ui/card";
import { FeaturesSection } from "@/types/course";
import Image from "next/image";

export default function CourseFeatures({ section }: { section: FeaturesSection }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">{section.name}</h2>
            <div className="grid grid-cols-2 gap-5">
                {section.values.map((feature) => (
                    <Card key={feature.id}>
                        <CardContent>
                            <div>
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={64}
                                    height={64}
                                    className="rounded-full object-cover object-center"
                                />
                            </div>
                            <div>
                                <h3>{feature.title}</h3>
                                <p>{feature.subtitle}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
