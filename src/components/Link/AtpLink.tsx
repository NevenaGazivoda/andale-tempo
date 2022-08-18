import React, { FC, PropsWithChildren } from 'react';
import { Link } from "react-router-dom";
import './AtpLink.scss'

type Props = PropsWithChildren<{
    to: string;
}>

export const AtpLink: FC<Props> = ({ children, to }) => (
    <div className="atp-link">
        <Link to={to}>{children}</Link>
    </div>
);


export default AtpLink;
