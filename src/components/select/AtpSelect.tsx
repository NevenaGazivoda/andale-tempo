import React, { FC } from 'react';
import { strings } from '../../constants/strings';
import './AtpSelect.scss'

type Props = {
    name: string;
    selectValues: { value: string, label: string }[]
}

export const AtpSelect: FC<Props> = ({ selectValues, name }) => {
    return (
        <select name={name} id='size-select' className='atp-selector' defaultValue={''}>
            <option value="" disabled>{strings.SELECT_A_SIZE}</option>
            {selectValues.map((item, index) => (
                <option key={"select-" + name + "-" + index} value={item.value}>{item.label}</option>
            ))}
        </select>
    );
};


export default AtpSelect;

