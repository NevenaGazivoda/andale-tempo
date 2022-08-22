import React, { FC, PropsWithChildren } from "react";
import '../button/AtpButton.scss'

type Props = PropsWithChildren<{
    isSecondary?: boolean;
}>

export const AtpButton: FC<Props> = ({ children, isSecondary }) => {
    return (
        <button className={`atp-button  ${isSecondary ? "atp-button--secondary" : "atp-button--primary"}`}>{children}</button>
    )
}

export default AtpButton;