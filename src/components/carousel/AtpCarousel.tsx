import React, { FC, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './AtpCarousel.scss'
import AtpCarouselButton from './AtpCarouselButton';

type Props = {
    slides: { url: string, title: string }[];
    toggleModal: () => void;
}

export const AtpCarousel: FC<Props> = ({ slides, toggleModal }) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <div className="atp-carousel">
            <div className="atp-carousel__viewport" ref={viewportRef}>
                <div className="atp-carousel__container">

                    {slides.map((slide, imageIndex) => (
                        <div className="atp-carousel__slide" key={imageIndex}>
                            <div className="atp-carousel__slide__inner">
                                <img
                                    onClick={toggleModal}
                                    className="atp-carousel__slide__img"
                                    src={slides[imageIndex].url}
                                    alt={slide.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="atp-carousel__dots">
                {scrollSnaps.map((_, index) => (
                    <AtpCarouselButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>

        </div>
    )
}

export default AtpCarousel;
