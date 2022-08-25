import React, { FC } from 'react';
import './AtpSelect.scss'

type Props = {
    selectValues: { value: string, label: string }[]
}

export const AtpSelect: FC<Props> = ({ selectValues }) => (
    <select name='size' id='size-select' className='atp-selector' defaultValue={''}>
        <option value="" disabled>SELECT A SIZE</option>
        {selectValues.map((item) => (
            <option key={item.label} value={item.value}>{item.label}</option>
        ))}
    </select>
);


export default AtpSelect;

