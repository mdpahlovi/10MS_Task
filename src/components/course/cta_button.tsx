import { Button } from "@/components/ui/button";
import { CtaText } from "@/types/course";

export default function CourseCta({ cta_text }: { cta_text: CtaText }) {
    return (
        <div className="my-6">
            <h2 className="mb-4">৳1000</h2>
            <Button>{cta_text.name}</Button>
        </div>
    );
}
