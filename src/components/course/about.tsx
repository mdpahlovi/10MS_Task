import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AboutSection } from "@/types/course";

export default function CourseAbout({ section }: { section: AboutSection }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-6">{section.name}</h2>
            <Accordion type="multiple">
                {section.values.map((pointer) => (
                    <AccordionItem key={pointer.id} value={pointer.id}>
                        <AccordionTrigger>
                            <div dangerouslySetInnerHTML={{ __html: pointer.title }} />
                        </AccordionTrigger>
                        <AccordionContent>
                            <div dangerouslySetInnerHTML={{ __html: pointer.description }} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
