import React, { FC, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './AtpCarousel.scss'
import AtpCarouselButton from './AtpCarouselButton';
import Modal from "react-modal";
import { VscClose } from 'react-icons/vsc'

Modal.setAppElement("#root");

type Props = {
    slides: { url: string, title: string }[];
}

export const AtpCarousel: FC<Props> = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

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
        <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container">

                    {slides.map((slide, imageIndex) => (
                        <div className="embla__slide" key={imageIndex}>
                            <div className="embla__slide__inner">
                                <img
                                    onClick={toggleModal}
                                    className="embla__slide__img"
                                    src={slides[imageIndex].url}
                                    alt={slide.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <AtpCarouselButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
            <Modal
                style={{
                    overlay: {
                        zIndex: '20000'
                    },
                    content: {
                        inset: 0
                    }
                }}
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
            >
                <p onClick={toggleModal} className="close-modal"><VscClose className="close-modal-icon" /></p>
                <div className='photos-modal'>
                    {slides.map((image, imageIndex) => (
                        <img key={imageIndex} src={image.url} alt={image.title} className='atp-article-desktop__photos__photo' />
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default AtpCarousel;
