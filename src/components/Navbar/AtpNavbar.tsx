import React, { FC } from 'react';
import { strings } from '../../constants/strings';
import AtpLink from '../link/AtpLink';
import './AtpNavbar.scss'
import { VscMenu, VscSearch, VscAccount, VscLock } from 'react-icons/vsc'

export const AtpNavbar: FC = () => (
    <nav className='atp-navbar'>
        <ul className='atp-navbar__desktop-list'>
            <li className='atp-navbar__desktop-list__link'>
                <AtpLink to="/">{strings.MENSWEAR}</AtpLink>
            </li>
            <li className='atp-navbar__desktop-list__link'>
                <AtpLink to="/">{strings.WOMENWEAR}</AtpLink>
            </li>
        </ul>

        <ul className='atp-navbar__mobile-list'>
            <li className='atp-navbar__mobile-list__link'>
                <AtpLink to="/"><VscMenu className='atp-navbar__mobile-list__link__icon' /></AtpLink>
            </li>
            <li className='atp-navbar__mobile-list__link'>
                <AtpLink to="/"><VscSearch className='atp-navbar__mobile-list__link__icon' /></AtpLink>
            </li>
        </ul>

        <p className='atp-navbar__title'>{strings.BRAND_NAME}</p>

        <ul className='atp-navbar__desktop-list atp-navbar__desktop-list--right'>
            <li className='atp-navbar__desktop-list__link'>
                <AtpLink to="/">{strings.HOME}</AtpLink>
            </li>
            <li className='atp-navbar____desktop-list__link--noPadding'>
                <AtpLink to="/article">{strings.ARTICLE}</AtpLink>
            </li>
        </ul>

        <ul className='atp-navbar__mobile-list atp-navbar__mobile-list--right'>
            <li className='atp-navbar__mobile-list__link'>
                <AtpLink to="/"><VscAccount className='atp-navbar__mobile-list__link__icon' /> </AtpLink>
            </li>
            <li className='atp-navbar____mobile-list__link--noPadding'>
                <AtpLink to="/article"><VscLock className='atp-navbar__mobile-list__link__icon' /></AtpLink>
            </li>
        </ul>
    </nav>
);

export default AtpNavbar;
