import { strings } from '../../constants/strings';
import { Category } from '../../models/category.model';

export const brandsData = [
  { id: 1, label: 'OFF-WHITE', type: 'brand' },
  { id: 2, label: 'THEORY', type: 'brand' },
  { id: 3, label: 'MONCLER', type: 'brand' },
  { id: 4, label: 'AMIRI', type: 'brand' },
  { id: 5, label: 'BOSS', type: 'brand' },
  { id: 6, label: 'CARTIER', type: 'brand' },
  { id: 7, label: 'FRAME', type: 'brand' },
  { id: 8, label: 'Frenckenberger', type: 'brand' },
  { id: 9, label: 'Fruity Booty', type: 'brand' },
  { id: 10, label: 'Gabe Gordon', type: 'brand' },
  { id: 11, label: 'Gabriela Coll Garments', type: 'brand' },
  { id: 12, label: 'Gabriela Hearst', type: 'brand' },
  { id: 13, label: 'GANNI', type: 'brand' },
  { id: 14, label: 'GAUCHERE', type: 'brand' },
  { id: 15, label: 'Gauge81', type: 'brand' },
  { id: 16, label: 'Gauntlett Cheng', type: 'brand' },
  { id: 17, label: 'GCDS', type: 'brand' },
  { id: 18, label: 'Gentle Fullness', type: 'brand' },
  { id: 19, label: 'Georgia Alice', type: 'brand' },
  { id: 20, label: 'GIA STUDIOS', type: 'brand' },
  { id: 21, label: 'GIABORGHINI', type: 'brand' },
  { id: 22, label: 'Gianvito Rossi', type: 'brand' },
  { id: 23, label: 'Gil Rodriguez', type: 'brand' },
  { id: 24, label: 'Gimaguas', type: 'brand' },
  { id: 25, label: 'Girlfriend Collective', type: 'brand' },
  { id: 26, label: 'Giuseppe Zanotti', type: 'brand' },
  { id: 27, label: 'Givenchy', type: 'brand' },
  { id: 28, label: 'Golden Goose', type: 'brand' },
  { id: 29, label: 'Goldsign', type: 'brand' },
  { id: 30, label: 'GR10K', type: 'brand' },
  { id: 31, label: 'Grlfrnd', type: 'brand' },
  { id: 32, label: 'Gucci', type: 'brand' },
  { id: 33, label: 'Haider Ackermann', type: 'brand' },
  { id: 34, label: 'Haight', type: 'brand' },
  { id: 35, label: 'HALFBOY', type: 'brand' },
  { id: 36, label: 'Hannah Jewett', type: 'brand' },
  { id: 37, label: 'Harlot Hands', type: 'brand' },
  { id: 38, label: 'Harris Wharf London', type: 'brand' },
  { id: 39, label: 'Hatton Labs', type: 'brand' },
  { id: 40, label: 'Hed Mayner', type: 'brand' },
  { id: 41, label: 'Helenamanzano', type: 'brand' },
  { id: 42, label: 'HELIOT EMIL', type: 'brand' },
  { id: 43, label: 'Helmut Lang', type: 'brand' },
  { id: 44, label: 'Henrik Vibskov', type: 'brand' },
  { id: 45, label: 'Herno', type: 'brand' },
  { id: 46, label: 'Heron Preston', type: 'brand' },
  { id: 47, label: 'Heron Preston for Calvin Klein', type: 'brand' },
  { id: 48, label: 'HÉROS', type: 'brand' },
  { id: 49, label: 'Herve Leger', type: 'brand' },
  { id: 50, label: 'Heste Jente', type: 'brand' },
  { id: 51, label: 'Holzweiler', type: 'brand' },
  { id: 52, label: 'HommeGirls', type: 'brand' },
  { id: 53, label: 'Hood by Air', type: 'brand' },
  { id: 54, label: 'HOPE', type: 'brand' },
  { id: 55, label: 'House of Dagmar', type: 'brand' },
  { id: 56, label: 'Hugo', type: 'brand' },
  { id: 57, label: 'HUGO KREIT', type: 'brand' },
  { id: 58, label: 'Hunter', type: 'brand' },
  { id: 59, label: 'Hunza G', type: 'brand' },
  { id: 60, label: 'Hyein Seo', type: 'brand' },
];

export const colorsData = [
  { id: 0, label: 'Black', type: 'color' },
  { id: 1, label: 'Blue', type: 'color' },
  { id: 2, label: 'Brown', type: 'color' },
  { id: 3, label: 'Burgundy', type: 'color' },
  { id: 4, label: 'Gray', type: 'color' },
  { id: 5, label: 'Green', type: 'color' },
  { id: 6, label: 'Navy', type: 'color' },
  { id: 7, label: 'Orange', type: 'color' },
  { id: 8, label: 'Pink', type: 'color' },
  { id: 9, label: 'Purple', type: 'color' },
  { id: 10, label: 'Red', type: 'color' },
  { id: 11, label: 'White', type: 'color' },
  { id: 12, label: 'Yellow', type: 'color' },
];

export const categoriesData: Category[] = [
  {
    id: 1,
    name: 'accessories',
    label: 'Accessories',
    type: 'category',
    children: [
      {
        id: 2,
        name: 'belts',
        label: 'Belts',
        type: 'category',

        children: [
          { id: 3, name: 'Leather belts', label: 'Leather belts', type: 'category', children: [] },
          { id: 4, name: 'Other belts', label: 'Other belts', type: 'category', children: [] },
        ],
      },
      { id: 5, name: 'eyewear', label: 'Eyewear', type: 'category', children: [] },
    ],
  },
  {
    id: 6,
    name: 'bags',
    label: 'Bags',
    type: 'category',
    children: [
      { id: 7, name: 'backpacks', label: 'Backpacks', type: 'category', children: [] },
      { id: 8, name: 'travel_bags', label: 'Travel Bags', type: 'category', children: [] },
    ],
  },
  {
    id: 9,
    name: 'clothing',
    label: 'Clothing',
    type: 'category',
    children: [
      { id: 10, name: 'jackets', label: 'Jackets', type: 'category', children: [] },
      { id: 11, name: 'jeans', label: 'Jeans', type: 'category', children: [] },
    ],
  },
  {
    id: 12,
    name: 'shoes',
    label: 'Shoes',
    type: 'category',
    children: [
      { id: 13, name: 'boots', label: 'Boots', type: 'category', children: [] },
      { id: 14, name: 'sandals', label: 'Sandals', type: 'category', children: [] },
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
