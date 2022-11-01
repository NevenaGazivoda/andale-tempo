import { strings } from '../../constants/strings';
import { Category } from '../../models/category.model';

export const brandsData = [
  { id: 1, label: 'OFF-WHITE', children: [] },
  { id: 2, label: 'THEORY', children: [] },
  { id: 3, label: 'MONCLER', children: [] },
  { id: 4, label: 'AMIRI', children: [] },
  { id: 5, label: 'BOSS', children: [] },
  { id: 6, label: 'CARTIER', children: [] },
  { id: 7, label: 'FRAME', children: [] },
  { id: 8, label: 'Frenckenberger', children: [] },
  { id: 9, label: 'Fruity Booty', children: [] },
  { id: 10, label: 'Gabe Gordon', children: [] },
  { id: 11, label: 'Gabriela Coll Garments', children: [] },
  { id: 12, label: 'Gabriela Hearst', children: [] },
  { id: 13, label: 'GANNI', children: [] },
  { id: 14, label: 'GAUCHERE', children: [] },
  { id: 15, label: 'Gauge81', children: [] },
  { id: 16, label: 'Gauntlett Cheng', children: [] },
  { id: 17, label: 'GCDS', children: [] },
  { id: 18, label: 'Gentle Fullness', children: [] },
  { id: 19, label: 'Georgia Alice', children: [] },
  { id: 20, label: 'GIA STUDIOS', children: [] },
  { id: 21, label: 'GIABORGHINI', children: [] },
  { id: 22, label: 'Gianvito Rossi', children: [] },
  { id: 23, label: 'Gil Rodriguez', children: [] },
  { id: 24, label: 'Gimaguas', children: [] },
  { id: 25, label: 'Girlfriend Collective', children: [] },
  { id: 26, label: 'Giuseppe Zanotti', children: [] },
  { id: 27, label: 'Givenchy', children: [] },
  { id: 28, label: 'Golden Goose', children: [] },
  { id: 29, label: 'Goldsign', children: [] },
  { id: 30, label: 'GR10K', children: [] },
  { id: 31, label: 'Grlfrnd', children: [] },
  { id: 32, label: 'Gucci', children: [] },
  { id: 33, label: 'Haider Ackermann', children: [] },
  { id: 34, label: 'Haight', children: [] },
  { id: 35, label: 'HALFBOY', children: [] },
  { id: 36, label: 'Hannah Jewett', children: [] },
  { id: 37, label: 'Harlot Hands', children: [] },
  { id: 38, label: 'Harris Wharf London', children: [] },
  { id: 39, label: 'Hatton Labs', children: [] },
  { id: 40, label: 'Hed Mayner', children: [] },
  { id: 41, label: 'Helenamanzano', children: [] },
  { id: 42, label: 'HELIOT EMIL', children: [] },
  { id: 43, label: 'Helmut Lang', children: [] },
  { id: 44, label: 'Henrik Vibskov', children: [] },
  { id: 45, label: 'Herno', children: [] },
  { id: 46, label: 'Heron Preston', children: [] },
  { id: 47, label: 'Heron Preston for Calvin Klein', children: [] },
  { id: 48, label: 'HÉROS', children: [] },
  { id: 49, label: 'Herve Leger', children: [] },
  { id: 50, label: 'Heste Jente', children: [] },
  { id: 51, label: 'Holzweiler', children: [] },
  { id: 52, label: 'HommeGirls', children: [] },
  { id: 53, label: 'Hood by Air', children: [] },
  { id: 54, label: 'HOPE', children: [] },
  { id: 55, label: 'House of Dagmar', children: [] },
  { id: 56, label: 'Hugo', children: [] },
  { id: 57, label: 'HUGO KREIT', children: [] },
  { id: 58, label: 'Hunter', children: [] },
  { id: 59, label: 'Hunza G', children: [] },
  { id: 60, label: 'Hyein Seo', children: [] },
];

export const colorsData = [
  { id: 0, label: 'Black', children: [] },
  { id: 1, label: 'Blue', children: [] },
  { id: 2, label: 'Brown', children: [] },
  { id: 3, label: 'Burgundy', children: [] },
  { id: 4, label: 'Gray', children: [] },
  { id: 5, label: 'Green', children: [] },
  { id: 6, label: 'Navy', children: [] },
  { id: 7, label: 'Orange', children: [] },
  { id: 8, label: 'Pink', children: [] },
  { id: 9, label: 'Purple', children: [] },
  { id: 10, label: 'Red', children: [] },
  { id: 11, label: 'White', children: [] },
  { id: 12, label: 'Yellow', children: [] },
];

export const categoriesData: Category[] = [
  {
    id: 1,
    name: 'accessories',
    label: 'Accessories',
    children: [
      {
        id: 2,
        name: 'belts',
        label: 'Belts',
        children: [
          { id: 3, name: 'Leather belts', label: 'Leather belts', children: [] },
          { id: 4, name: 'Other belts', label: 'Other belts', children: [] },
        ],
      },
      { id: 5, name: 'eyewear', label: 'Eyewear', children: [] },
    ],
  },
  {
    id: 6,
    name: 'bags',
    label: 'Bags',
    children: [
      { id: 7, name: 'backpacks', label: 'Backpacks', children: [] },
      { id: 8, name: 'travel_bags', label: 'Travel Bags', children: [] },
    ],
  },
  {
    id: 9,
    name: 'clothing',
    label: 'Clothing',
    children: [
      { id: 10, name: 'jackets', label: 'Jackets', children: [] },
      { id: 11, name: 'jeans', label: 'Jeans', children: [] },
    ],
  },
  {
    id: 12,
    name: 'shoes',
    label: 'Shoes',
    children: [
      { id: 13, name: 'boots', label: 'Boots', children: [] },
      { id: 14, name: 'sandals', label: 'Sandals', children: [] },
    ],
  },
];

export const featuredDesigners = [
  'AMIRI',
  'THEORY',
  'BOSS',
  'CARTIER',
  'GUCCI',
  'MONCLER',
  'OFF-WHITE',
];

export const sortOptions = [
  {
    id: 1,
    text: strings.LATEST_ARRIVALS,
    value: 'latest-arrivals',
  },
  {
    id: 2,
    text: strings.TRENDING,
    value: 'trending',
  },
  {
    id: 3,
    text: strings.PRICE + ' ' + strings.LOW_TO_HIGH,
    value: 'low to high',
  },
  {
    id: 4,
    text: strings.PRICE + ' ' + strings.HIGH_TO_LOW,
    value: 'high to low',
  },
];

export const menuOptions = [
  {
    id: 0,
    text: strings.MENSWEAR,
    icon: true,
    isShoppingCart: false,
    isUppercase: true,
    topMargin: false,
  },
  {
    id: 1,
    text: strings.WOMENSWEAR,
    icon: true,
    isShoppingCart: false,
    isUppercase: true,
    topMargin: false,
  },
  {
    id: 2,
    text: strings.EVERYTHING_ELSE,
    icon: true,
    isShoppingCart: false,
    isUppercase: true,
    topMargin: false,
  },
  {
    id: 3,
    text: strings.SHOPPING_CART,
    icon: false,
    isShoppingCart: true,
    isUppercase: false,
    topMargin: false,
  },
  {
    id: 4,
    text: strings.WISHLIST,
    icon: false,
    isShoppingCart: false,
    isUppercase: false,
    topMargin: false,
  },
  {
    id: 5,
    text: strings.LANGUAGE,
    icon: false,
    isShoppingCart: false,
    isUppercase: false,
    topMargin: false,
  },

  {
    id: 6,
    text: strings.CUSTOMER_CARE,
    icon: true,
    isShoppingCart: false,
    isUppercase: false,
    topMargin: true,
  },
  {
    id: 7,
    text: strings.LIVE_ASSISTANCE,
    icon: false,
    isShoppingCart: false,
    isUppercase: false,
    topMargin: false,
  },
  {
    id: 8,
    text: strings.LOCATIONS,
    icon: true,
    isShoppingCart: false,
    isUppercase: false,
    topMargin: false,
  },
];

export const searchTabs = [
  {
    id: 1,
    title: strings.DESIGNERS,
  },
  {
    id: 2,
    title: strings.CATEGORIES,
  },
  {
    id: 3,
    title: strings.COLORS,
  },
  {
    id: 4,
    title: strings.SIZES,
  },
];
