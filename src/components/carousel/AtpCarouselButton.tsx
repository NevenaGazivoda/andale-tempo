import React, { FC } from "react";
import './AtpCarousel.scss'

type Props = {
    selected: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const AtpCarouselButton: FC<Props> = ({ selected, onClick }) => (
    <button
        className={`embla__dot ${selected ? "is-selected" : ""}`}
        type="button"
        onClick={onClick}
    />
);

export default AtpCarouselButton;
