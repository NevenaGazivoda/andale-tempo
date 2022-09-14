import React, { FC, useState } from 'react';
import './AtpArticle.scss'
import AtpLink from '../../components/link/AtpLink';
import AtpText from '../../components/text/AtpText';
import AtpList from '../../components/list/AtpList';
import AtpButton from '../../components/button/AtpButton';
import AtpPrice from '../../components/price/AtpPrice';
import AtpSelect from '../../components/select/AtpSelect';
import { strings } from '../../constants/strings';
import AtpCarousel from '../../components/carousel/AtpCarousel';
import { HiOutlineHeart } from 'react-icons/hi';
import AtpModal from '../../components/modal/AtpModal';
import AtpRecentlyViewed from '../../components/recently-viewed/AtpRecentlyViewed';
import { ARTICLES_DATA } from '../../assets/dummy-data/atp-data';
import { useParams } from 'react-router-dom';
import { Article } from '../../models/article.model';

type Props = {
    handleAddToCart: (clickedItem: Article) => void;
};

export const AtpArticle: FC<Props> = ({ handleAddToCart }) => {
    const { articleCode } = useParams();
    const article = ARTICLES_DATA.find(article => article.articleCode === articleCode) as Article;

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const [isLiked, setIsLiked] = useState(false);

    return (
        <>
            <div className="atp-page atp-article-desktop">

                <div className='atp-article-desktop__description'>
                    <div className='atp-article-desktop__description__text'>
                        <AtpLink to="/">{article.brand}</AtpLink>
                        <AtpText>{article.articleName}</AtpText>
                        <AtpList listName={article.description} list={article.features} />
                        <AtpText>{strings.SUPPLIER_COLOR} {article.supplierColor}</AtpText>
                        <AtpText>{article.material}</AtpText>
                        <AtpText>{article.countryOfOrigin}</AtpText>
                        <AtpText>{article.articleCode}</AtpText>
                    </div>
                </div>

                <div className='atp-article-desktop__photos'>
                    {article.images.map((image, imageIndex) => (
                        <img key={imageIndex} src={image.url} alt={image.title} className='atp-article-desktop__photos__photo' onClick={toggleModal} />
                    ))}
                    <AtpModal isOpen={isOpen} toggleModal={toggleModal} content={article.images} />

                </div>

                <div className='atp-article-desktop__actions'>
                    <div className='atp-article-desktop__actions__elements'>
                        <AtpPrice price={article.price} newPrice={article.newPrice} discount={article.discount} />
                        <AtpSelect selectValues={article.articleSize} name={'articleSize'} />

                        <div className='atp-article-desktop__actions__buttons'>
                            <AtpButton onClick={() => handleAddToCart(article)}>{strings.ADD_TO_BAG}</AtpButton>
                            <AtpButton isSecondary>{strings.ADD_TO_WISH_LIST}</AtpButton>
                        </div>
                        <AtpText>{article.modelSize}</AtpText>
                    </div>
                </div>
            </div >


            <div className="atp-page atp-article-mobile">

                <div className='atp-article-mobile__photos'>
                    <AtpCarousel slides={article.images} toggleModal={toggleModal} />
                </div>

                <div className='atp-article-mobile__description'>
                    <div className='atp-article-mobile__description__info'>
                        <div className='atp-article-mobile__description__info__brand'>
                            <AtpLink to="/">{article.brand}</AtpLink>
                            <AtpText>{article.articleName}</AtpText>
                        </div>
                        <div className='atp-article-mobile__description__info__price'>
                            <AtpPrice price={article.price} newPrice={article.newPrice} discount={article.discount} />
                        </div>
                    </div>

                    <AtpSelect selectValues={article.articleSize} name={'articleSize'} />

                    <div className='atp-article-mobile__description__buttons'>
                        <AtpButton>{strings.ADD_TO_BAG}</AtpButton>
                        <AtpButton isSecondary><HiOutlineHeart className='atp-article-mobile__description__buttons__icon-heart' onClick={() => setIsLiked(!isLiked)} fill={isLiked ? 'black' : 'white'} /></AtpButton>
                    </div>

                    <AtpList listName={article.description} list={article.features} />
                    <AtpText>{strings.SUPPLIER_COLOR} {article.supplierColor}</AtpText>
                    <AtpText>{article.material}</AtpText>
                    <AtpText>{article.countryOfOrigin}</AtpText>
                    <AtpText>{article.articleCode}</AtpText>
                </div>
            </div >

            <AtpRecentlyViewed />
        </>
    );
}

export default AtpArticle;
