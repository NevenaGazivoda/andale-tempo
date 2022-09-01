import React from 'react';
import { render } from '@testing-library/react';
import AtpArticle from './AtpArticle';
import hoodie1 from './assets/images/hoodie1.jpeg'
import hoodie2 from './assets/images/hoodie2.jpeg'
import hoodie3 from './assets/images/hoodie3.jpeg'
import hoodie4 from './assets/images/hoodie4.jpeg'
import { Article } from '../../models/article.model';

const ARTICLE_DATA: Article =
{
    brand: 'OFF-WHITE',
    articleName: 'Off-White Embroidered Sweater',
    description: 'French terry sweater.',
    features: ['Half-zip closure', 'Rib knit stand collar', 'Logo graphic embroidered at chest', 'Flap pocket', 'Welt pockets', 'Elasticized hem and cuffs '],
    supplierColor: 'Snow white',
    material: 'Body: 100% cotton. Trim: 99% cotton, 1% elastane.',
    countryOfOrigin: 'Made in Portugal.',
    articleCode: '222719M202007',
    price: 200,
    newPrice: 100,
    discount: 50,
    images: [{ url: hoodie1, title: 'hoodie1' }, { url: hoodie2, title: 'hoodie2' }, { url: hoodie3, title: 'hoodie3' }, { url: hoodie4, title: 'hoodie4' }],
    articleSize: [{ value: "xs", label: "XS" }, { value: "s", label: "S" }, { value: "m", label: "M" }, { value: "l", label: "L" }, { value: "xl", label: "XL" }],
    modelSize: 'Model is 6ft 3 and wears size L.',
}

test('renders article', () => {
    render(<AtpArticle article={ARTICLE_DATA} />);
});
