import React, { FC } from 'react';
import { strings } from '../../constants/strings';
import AtpLink from '../link/AtpLink';
import './AtpNavbar.scss'

export const AtpNavbar: FC = () => (
    <nav className='atp-navbar'>
        <ul className='atp-navbar__list'>
            <li className='atp-navbar__list__link'>
                <AtpLink to="/">{strings.MENSWEAR}</AtpLink>
            </li>
            <li className='atp-navbar__list__link'>
                <AtpLink to="/">{strings.WOMENWEAR}</AtpLink>
            </li>
        </ul>

        <p className='atp-navbar__title'>{strings.BRAND_NAME}</p>

        <ul className='atp-navbar__list atp-navbar__list--right'>
            <li className='atp-navbar__list__link'>
                <AtpLink to="/">{strings.HOME}</AtpLink>
            </li>
            <li className='atp-navbar__list__link--noPadding'>
                <AtpLink to="/article">{strings.ARTICLE}</AtpLink>
            </li>
        </ul>
    </nav>
);

export default AtpNavbar;
