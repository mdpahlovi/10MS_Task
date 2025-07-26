"use client";

import { Media } from "@/types/course";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import { NextButton, PrevButton, usePrevNextButtons } from "@/components/carousel/embla-carousel-arrows";
import "@/components/carousel/embla.css";

export default function CourseMedia({ media }: { media: Media[] }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
    });

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaMainApi);

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();

        emblaMainApi.on("select", onSelect).on("reInit", onSelect);
    }, [emblaMainApi, onSelect]);

    console.log({ media });

    return (
        <div className="embla space-y-5">
            <div className="embla__viewport" ref={emblaMainRef}>
                <div className="embla__container">
                    {media.map((slide, idx) => (
                        <div key={idx} className="embla__slide">
                            {(function () {
                                switch (slide.resource_type) {
                                    case "video":
                                        return (
                                            <div className="relative aspect-video">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${slide.resource_value}?modestbranding=1&rel=0&controls=1`}
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full"
                                                ></iframe>
                                            </div>
                                        );
                                    case "image":
                                        return (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={slide.resource_value}
                                                alt={slide.name}
                                                className="aspect-video object-cover object-center"
                                            />
                                        );
                                }
                            })()}
                        </div>
                    ))}
                </div>

                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>

            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                <div className="embla-thumbs__container">
                    {media.map((slide, idx) => {
                        const selected = idx === selectedIndex;
                        const onClick = () => onThumbClick(idx);

                        return (
                            <div key={idx} className={"embla-thumbs__slide ".concat(selected ? "embla-thumbs__slide--selected" : "")}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={slide.resource_type === "video" ? slide.thumbnail_url : slide.resource_value}
                                    alt={slide.name}
                                    onClick={onClick}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
