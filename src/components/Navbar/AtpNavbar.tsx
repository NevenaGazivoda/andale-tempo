import React, { FC } from 'react';
import { strings } from '../../constants/strings';
import AtpLink from '../link/AtpLink';
import './AtpNavbar.scss'
import { VscMenu, VscSearch, VscAccount, VscLock } from 'react-icons/vsc'


type Props = {
    totalItems: number
}

export const AtpNavbar: FC<Props> = ({ totalItems }) => {
    return (
        <nav className='atp-navbar'>
            <ul className='navbar-list navbar-list--desktop'>
                <li className='navbar-list__link'>
                    <AtpLink to="/">{strings.MENSWEAR}</AtpLink>
                </li>
                <li className='navbar-list__link'>
                    <AtpLink to="/">{strings.WOMENWEAR}</AtpLink>
                </li>
            </ul>

            <ul className='navbar-list navbar-list--mobile'>
                <li className='navbar-list__link'>
                    <AtpLink to="/"><VscMenu className='navbar-list__link__mobile-icon' /></AtpLink>
                </li>
                <li className='navbar-list__link'>
                    <AtpLink to="/"><VscSearch className='navbar-list__link__mobile-icon' /></AtpLink>
                </li>
            </ul>

            <p className='atp-navbar__title'>{strings.BRAND_NAME}</p>

            <ul className='navbar-list navbar-list--right navbar-list--desktop'>
                <li className='navbar-list__link'>
                    <AtpLink to="/">{strings.HOME}</AtpLink>
                </li>
                <li className='navbar-list__link--noPadding'>
                    <AtpLink to="/shopping-cart">{strings.SHOPPING_CART} ({totalItems})</AtpLink>
                </li>
            </ul>

            <ul className='navbar-list navbar-list--right navbar-list--mobile'>
                <li className='navbar-list__link'>
                    <AtpLink to="/"><VscAccount className='navbar-list__link__mobile-icon' /> </AtpLink>
                </li>
                <li className='navbar-list__link--noPadding'>
                    <AtpLink to="/shopping-cart"><VscLock className='navbar-list__link__mobile-icon' /></AtpLink>
                </li>
            </ul>
        </nav>
    );
};

export default AtpNavbar;
