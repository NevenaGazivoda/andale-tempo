import React, { FC } from 'react';
import { strings } from '../../constants/strings';
import './AtpSelect.scss'

type Props = {
    name: string;
    selectValues: { value: string, label: string }[];
    onSelect: any;
}

export const AtpSelect: FC<Props> = ({ selectValues, name, onSelect }) => {

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        console.log(e.target.options[e.target.selectedIndex].text)
        // onSelect(e.target.value);
        onSelect({ value: e.target.value, label: e.target.options[e.target.selectedIndex].text })
    }

    return (
        <select name={name} id='size-select' className='atp-selector' defaultValue={''} onChange={handleChange} >
            <option value="" disabled>{strings.SELECT_A_SIZE}</option>
            {selectValues.map((item, index) => (
                <option key={"select-" + name + "-" + index} value={item.value} label={item.label}>{item.label}</option>
            ))}
        </select>
    );
};


export default AtpSelect;

