import React from 'react';
import './AtpArticle.scss'
import hoodie1 from '../../assets/images/hoodie1.jpeg'
import hoodie2 from '../../assets/images/hoodie2.jpeg'
import hoodie3 from '../../assets/images/hoodie3.jpeg'
import hoodie4 from '../../assets/images/hoodie4.jpeg'
import { strings } from '../../constants/strings';
import AtpLink from '../../components/link/AtpLink';
import AtpText from '../../components/text/AtpText';
import AtpList from '../../components/list/AtpList';
import AtpButton from '../../components/button/AtpButton';
import AtpPrice from '../../components/price/AtpPrice';


export const AtpArticle = () => {

    const itemInfo = ['Half-zip closure', 'Rib knit stand collar', 'Logo graphic embroidered at chest', 'Flap pocket', 'Welt pockets', 'Elasticized hem and cuffs ']

    return (
        <div className="page atp-article">
            <div className='atp-article__description'>
                <div className='atp-article__description__text'>
                    <AtpLink to="/">OFF-WHITE</AtpLink>
                    <AtpText>Off-White Embroidered Sweater</AtpText>
                    <AtpList listName='French terry sweater.' list={itemInfo} />
                    <AtpText>Supplier color: Snow white</AtpText>
                    <AtpText>Body: 100% cotton. Trim: 99% cotton, 1% elastane.</AtpText>
                    <AtpText>Made in Portugal.</AtpText>
                    <AtpText>222719M202007</AtpText>
                </div>
            </div>
            <div className='atp-article__photos'>
                <img src={hoodie1} alt="hoodie" className='atp-article__photos__photo' />
                <img src={hoodie2} alt="hoodie" className='atp-article__photos__photo' />
                <img src={hoodie3} alt="hoodie" className='atp-article__photos__photo' />
                <img src={hoodie4} alt="hoodie" className='atp-article__photos__photo' />
            </div>
            <div className='atp-article__actions'>
                <div className='atp-article__actions__elements'>
                    <AtpPrice price={200} newPrice={100} discount={50}></AtpPrice>

                    <select name='size' id='size-select' className='atp-article__actions__selector'>
                        <option value="">{strings.SELECT_A_SIZE}</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>

                    <div className='atp-article__actions__buttons'>
                        <AtpButton>{strings.ADD_TO_BAG}</AtpButton>
                        <AtpButton isSecondary>{strings.ADD_TO_WISH_LIST}</AtpButton>
                    </div>
                    <AtpText>Model is 6ft 3 and wears size L.</AtpText>
                </div>

            </div>
        </div >
    );
}

export default AtpArticle;
