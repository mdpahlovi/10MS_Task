import EmblaCarousel from "@/components/carousel/embla-carousel";
import { Media } from "@/types/course";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function CourseMedia({ media }: { media: Media[] }) {
    return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
