import { Article } from '../../models/article.model';
import hoodie1 from '../images/hoodie1.jpeg';
import hoodie2 from '../images/hoodie2.jpeg';
import hoodie3 from '../images/hoodie3.jpeg';
import hoodie4 from '../images/hoodie4.jpeg';
import shirt1 from '../images/theory-shirt1.jpg';
import shirt2 from '../images/theory-shirt2.jpeg';
import shirt3 from '../images/theory-shirt3.jpeg';
import shirt4 from '../images/theory-shirt4.jpeg';
import moncler1 from '../images/moncler1.jpeg';
import moncler2 from '../images/moncler2.jpeg';
import moncler3 from '../images/moncler3.jpeg';
import moncler4 from '../images/moncler4.jpeg';

export const ARTICLES_DATA: Article[] = [
  {
    brand: 'OFF-WHITE',
    articleName: 'Off-White Embroidered Sweater',
    description: 'French terry sweater.',
    features: [
      'Half-zip closure',
      'Rib knit stand collar',
      'Logo graphic embroidered at chest',
      'Flap pocket',
      'Welt pockets',
      'Elasticized hem and cuffs ',
    ],
    supplierColor: 'Snow white',
    material: 'Body: 100% cotton. Trim: 99% cotton, 1% elastane.',
    countryOfOrigin: 'Made in Portugal.',
    articleCode: '222719M202007',
    price: 200,
    newPrice: 100,
    discount: 50,
    images: [
      { url: hoodie1, title: 'hoodie1' },
      { url: hoodie2, title: 'hoodie2' },
      { url: hoodie3, title: 'hoodie3' },
      { url: hoodie4, title: 'hoodie4' },
    ],
    articleSize: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
    ],
    modelSize: 'Model is 6ft 3 and wears size L.',
  },
  {
    brand: 'Theory',
    articleName: 'Navy Sylvain Shirt',
    description: 'Long sleeve cotton poplin shirt in navy.',
    features: ['Spread collar', 'Button closure at front', 'Two-button barrel cuffs'],
    supplierColor: 'Eclipse',
    material: '100% cotton.',
    countryOfOrigin: 'Imported',
    articleCode: '222216M192006',
    price: 210,
    images: [
      { url: shirt1, title: 'theory-shirt1' },
      { url: shirt2, title: 'theory-shirt2' },
      { url: shirt3, title: 'theory-shirt3' },
      { url: shirt4, title: 'theory-shirt4' },
    ],
    articleSize: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
    ],
    modelSize: 'Model is 6ft 1 and wears size L.',
  },
  {
    brand: 'Moncler',
    articleName: 'White Logo Zip-Up',
    description: 'Long sleeve cotton-blend French terry zip-up',
    features: ['White color featuring felt logos in red, purple, and blue'],
    supplierColor: 'White',
    material: 'Body 1: 100% cotton. Body 2: 100% polyester.',
    countryOfOrigin: 'Imported',
    articleCode: '212111M202026',
    price: 1020,
    images: [
      { url: moncler1, title: 'moncler1' },
      { url: moncler2, title: 'moncler2' },
      { url: moncler3, title: 'moncler3' },
      { url: moncler4, title: 'moncler4' },
    ],
    articleSize: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
    ],
    modelSize: 'Model is 6ft 3 and wears size XL.',
  },
];
