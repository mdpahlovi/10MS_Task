import { Button } from "@/components/ui/button";
import { CtaText } from "@/types/course";

export default function CourseCta({ cta_text }: { cta_text: CtaText }) {
    return <Button>{cta_text.name}</Button>;
}
