import React, { FC, PropsWithChildren } from 'react';
import './AtpText.scss'

type Props = PropsWithChildren

export const AtpText: FC<Props> = ({ children }) => (
    <p className="atp-text">{children}</p>
);


export default AtpText;
