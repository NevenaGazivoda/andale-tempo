import React from 'react';
import './AtpArticle.scss'
import hoodie1 from '../../assets/images/hoodie1.jpeg'
import hoodie2 from '../../assets/images/hoodie2.jpeg'
import hoodie3 from '../../assets/images/hoodie3.jpeg'
import hoodie4 from '../../assets/images/hoodie4.jpeg'
import AtpLink from '../../components/link/AtpLink';
import AtpText from '../../components/text/AtpText';
import AtpList from '../../components/list/AtpList';
import AtpButton from '../../components/button/AtpButton';
import AtpPrice from '../../components/price/AtpPrice';
import AtpSelect from '../../components/select/AtpSelect';
import { strings } from '../../constants/strings';
import { Article } from '../../models/article.model';


export const AtpArticle = () => {

    const ARTICLE_DATA: Article =
    {
        brand: 'OFF-WHITE',
        articleName: 'Off-White Embroidered SweaterRRRR',
        description: 'French terry sweater.',
        features: ['Half-zip closure', 'Rib knit stand collar', 'Logo graphic embroidered at chest', 'Flap pocket', 'Welt pockets', 'Elasticized hem and cuffs '],
        supplierColor: 'Snow white',
        material: 'Body: 100% cotton. Trim: 99% cotton, 1% elastane.',
        countryOfOrigin: 'Made in Portugal.',
        articleCode: '222719M202007',
        price: 200,
        newPrice: 100,
        discount: 50,
        articleSize: [{ value: "xs", label: "XS" }, { value: "s", label: "S" }, { value: "m", label: "M" }, { value: "l", label: "L" }, { value: "xl", label: "XL" }],
        modelSize: 'Model is 6ft 3 and wears size L.',
    }

    return (
        <div className="atp-page atp-article">
            <div className='atp-article__description'>
                <div className='atp-article__description__text'>
                    <AtpLink to="/">{ARTICLE_DATA.brand}</AtpLink>
                    <AtpText>{ARTICLE_DATA.articleName}</AtpText>
                    <AtpList listName={ARTICLE_DATA.description} list={ARTICLE_DATA.features} />
                    <AtpText>{strings.SUPPLIER_COLOR} {ARTICLE_DATA.supplierColor}</AtpText>
                    <AtpText>{ARTICLE_DATA.material}</AtpText>
                    <AtpText>{ARTICLE_DATA.countryOfOrigin}</AtpText>
                    <AtpText>{ARTICLE_DATA.articleCode}</AtpText>
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
                    <AtpPrice price={ARTICLE_DATA.price} newPrice={ARTICLE_DATA.newPrice} discount={ARTICLE_DATA.discount} />
                    <AtpSelect selectValues={ARTICLE_DATA.articleSize} name={'articleSize'} />

                    <div className='atp-article__actions__buttons'>
                        <AtpButton>{strings.ADD_TO_BAG}</AtpButton>
                        <AtpButton isSecondary>{strings.ADD_TO_WISH_LIST}</AtpButton>
                    </div>
                    <AtpText>{ARTICLE_DATA.modelSize}</AtpText>
                </div>

            </div>
        </div >
    );
}

export default AtpArticle;
