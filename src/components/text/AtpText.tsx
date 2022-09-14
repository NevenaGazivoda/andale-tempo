import React, { FC, PropsWithChildren } from 'react';
import './AtpText.scss'

type Props = PropsWithChildren<{
    className?: string;
}>

export const AtpText: FC<Props> = ({ children, className }) => (
    <p className={`atp-text ${className}`}>{children}</p>
);


export default AtpText;
