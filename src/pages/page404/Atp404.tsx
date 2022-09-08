import React from 'react';
import AtpLink from '../../components/link/AtpLink';
import AtpText from '../../components/text/AtpText';
import './Atp404.scss'

export const Atp404 = () => {
    return (
        <div className='atp-page atp-404'>
            <h1>Page not found</h1>
            <AtpText>We are sorry but this page is no longer available on our web site.</AtpText>
            <AtpLink to="/">Return to home page</AtpLink>
        </div>
    )
};


export default Atp404;
