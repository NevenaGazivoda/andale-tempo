import React from 'react';
import './AtpArticle.scss'
import hoodie1 from '../../assets/hoodie1.jpeg'
import hoodie2 from '../../assets/hoodie2.jpeg'
import hoodie3 from '../../assets/hoodie3.jpeg'
import hoodie4 from '../../assets/hoodie4.jpeg'
import { strings } from '../../constants/strings';


export const AtpArticle = () => {

    return (
        <div className="page atp-article">
            <div className='atp-article__informations'>
                <h1 className='atp-article__informations__title'>{strings.ARTICLE}</h1>
            </div>
            <div className='atp-article__photos'>
                <img src={hoodie1} alt="hoodie" className='atp-article__photos__photo' />
                <img src={hoodie2} alt="hoodie" className='atp-article__photos__photo' />
                <img src={hoodie3} alt="hoodie" className='atp-article__photos__photo' />
                <img src={hoodie4} alt="hoodie" className='atp-article__photos__photo' />
            </div>
            <div className='atp-article__informations'>
                <h1 className='atp-article__informations__title'>{strings.ARTICLE}</h1>
            </div>
            {/* <div className='atp-article__adding'>
                <h1 className='atp-article__adding__title'>Add article</h1>
            </div> */}
        </div >
    );
}

export default AtpArticle;
