import React, { FC, useState } from 'react';
import './AtpArticle.scss'
import AtpLink from '../../components/link/AtpLink';
import AtpText from '../../components/text/AtpText';
import AtpList from '../../components/list/AtpList';
import AtpButton from '../../components/button/AtpButton';
import AtpPrice from '../../components/price/AtpPrice';
import AtpSelect from '../../components/select/AtpSelect';
import AtpCarousel from '../../components/carousel/AtpCarousel';
import AtpModal from '../../components/modal/AtpModal';
import { strings } from '../../constants/strings';
import { HiOutlineHeart } from 'react-icons/hi';
import { Article } from '../../models/article.model';
import { CartItem } from '../../models/cart-item.model';

type Props = {
    article: Article;
    handleAddToCart: (clickedItem: CartItem) => void;
};

export const AtpArticle: FC<Props> = ({ article, handleAddToCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showError, setShowError] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const [size, setSize] = useState({ value: '', label: '' });

    const onSelect = (selectedSize: { value: string, label: string }) => {
        setSize(selectedSize);
    }

    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        if (size.value) {
            handleAddToCart({ ...article, image: article.images[0], size })
        }
        else {
            setShowError(true)
        }
    }

    return (
        <>
            <div className="atp-article-desktop">

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
                        <AtpSelect selectValues={article.articleSize} name={'articleSize'} onSelect={onSelect} />
                        {
                            showError && !size.value &&
                            <i> <AtpText>{strings.PLEASE_SELECT_A_SIZE}</AtpText></i>
                        }

                        <div className='atp-article-desktop__actions__buttons'>
                            <AtpButton onClick={handleClick}>{strings.ADD_TO_BAG}</AtpButton>
                            <AtpButton isSecondary>{strings.ADD_TO_WISH_LIST}</AtpButton>
                        </div>
                        <AtpText>{article.modelSize}</AtpText>
                    </div>
                </div>
            </div >


            <div className="atp-article-mobile">

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

                    <AtpSelect selectValues={article.articleSize} name={'articleSize'} onSelect={onSelect} />
                    {
                        showError && !size.value &&
                        <i> <AtpText>{strings.PLEASE_SELECT_A_SIZE}</AtpText></i>
                    }

                    <div className='atp-article-mobile__description__buttons'>
                        <AtpButton onClick={handleClick}>{strings.ADD_TO_BAG}</AtpButton>
                        <AtpButton isSecondary><HiOutlineHeart className='atp-article-mobile__description__buttons__icon-heart' onClick={() => setIsLiked(!isLiked)} fill={isLiked ? 'black' : 'white'} /></AtpButton>
                    </div>

                    <AtpList listName={article.description} list={article.features} />
                    <AtpText>{strings.SUPPLIER_COLOR} {article.supplierColor}</AtpText>
                    <AtpText>{article.material}</AtpText>
                    <AtpText>{article.countryOfOrigin}</AtpText>
                    <AtpText>{article.articleCode}</AtpText>
                </div>
            </div >
        </>
    );
}

export default AtpArticle;
