import React, { FC, PropsWithChildren } from 'react';
import { Link } from "react-router-dom";
import './AtpLink.scss'

type Props = PropsWithChildren<{
    to: string;
    className?: string;
}>

export const AtpLink: FC<Props> = ({ children, to, className }) => (
    <p className={`atp-link ${className}`}>
        <Link to={to}>{children}</Link>
    </p>
);


export default AtpLink;
