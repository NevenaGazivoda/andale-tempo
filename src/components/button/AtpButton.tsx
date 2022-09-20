import React, { FC, PropsWithChildren } from "react";
import '../button/AtpButton.scss'

type Props = PropsWithChildren<{
    isSecondary?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string
}>

export const AtpButton: FC<Props> = ({ children, isSecondary, onClick, className }) => {
    return (
        <button onClick={onClick} className={`atp-button  ${isSecondary ? "atp-button--secondary" : "atp-button--primary"} ${className}`}>{children}</button>
    )
}

export default AtpButton;