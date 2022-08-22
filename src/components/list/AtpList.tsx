import React, { FC, PropsWithChildren } from 'react';
import './AtpList.scss'

type Props = PropsWithChildren<{
    listName: string
    list: string[]
}>

export const AtpLink: FC<Props> = ({ listName, list }) => (
    <ul className='atp-list'>
        <p>{listName}</p>
        {list.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);


export default AtpLink;
