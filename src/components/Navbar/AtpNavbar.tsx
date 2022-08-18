import React, { FC } from 'react';
import AtpLink from '../Link/AtpLink';
import './AtpNavbar.scss'

export const AtpNavbar: FC = () => (
    <nav className='atp-navbar'>
        <ul className='atp-navbar__list'>
            <li className='atp-navbar__list__link'>
                <AtpLink to="/">Menswear</AtpLink>
            </li>
            <li className='atp-navbar__list__link'>
                <AtpLink to="/">Womenwear</AtpLink>
            </li>
        </ul>

        <p className='atp-navbar__title'>ANDALE TEMPO</p>

        <ul className='atp-navbar__list'>
            <li className='atp-navbar__list__link'>
                <AtpLink to="/">Home</AtpLink>
            </li>
            <li className='atp-navbar__list__link'>
                <AtpLink to="/article">Article</AtpLink>
            </li>
        </ul>
    </nav>
);

export default AtpNavbar;
