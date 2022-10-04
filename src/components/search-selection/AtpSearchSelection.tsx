import React from 'react';
import AtpLink from '../../components/link/AtpLink';
import { strings } from '../../constants/strings';
import './AtpSearchSelection.scss';

export const AtpNotFound = () => {
  const categories = ['ACCESSORIES', 'BAGS', 'CLOTHING', 'SHOES'];
  const brands = [
    'OFF-WHITE',
    'THEORY',
    'MONCLER',
    'AMIRI',
    'BOSS',
    'CARTIER',
    'FRAME',
    'Frenckenberger',
    'Fruity Booty',
    'Gabe Gordon',
    'Gabriela Coll Garments',
    'Gabriela Hearst',
    'GANNI',
    'GAUCHERE',
    'Gauge81',
    'Gauntlett Cheng',
    'GCDS',
    'Gentle Fullness',
    'Georgia Alice',
    'GIA STUDIOS',
    'GIABORGHINI',
    'Gianvito Rossi',
    'Gil Rodriguez',
    'Gimaguas',
    'Girlfriend Collective',
    'Giuseppe Zanotti',
    'Givenchy',
    'Golden Goose',
    'Goldsign',
    'GR10K',
    'Grlfrnd',
    'Gucci',
    'Haider Ackermann',
    'Haight',
    'HALFBOY',
    'Hannah Jewett',
    'Harlot Hands',
    'Harris Wharf London',
    'Hatton Labs',
    'Hed Mayner',
    'Helenamanzano',
    'HELIOT EMIL',
    'Helmut Lang',
    'Henrik Vibskov',
    'Herno',
    'Heron Preston',
    'Heron Preston for Calvin Klein',
    'HÉROS',
    'Herve Leger',
    'Heste Jente',
    'Holzweiler',
    'HommeGirls',
    'Hood by Air',
    'HOPE',
    'House of Dagmar',
    'Hugo',
    'HUGO KREIT',
    'Hunter',
    'Hunza G',
    ' Hyein Seo',
  ];
  return (
    <div className="atp-search-selection">
      <div className="atp-search-selection__title">
        <AtpLink to={''}>{strings.ALL + ' ' + strings.CATEGORIES}</AtpLink>
      </div>
      {categories.map((brand: string, index: number) => (
        <AtpLink className="atp-search-selection__link" key={index} to={''}>
          {brand}
        </AtpLink>
      ))}
      <div className="atp-search-selection__title">
        <AtpLink to={''}>{strings.ALL + ' ' + strings.DESIGNERS}</AtpLink>
      </div>
      {brands.map((brand: string, index: number) => (
        <AtpLink className="atp-search-selection__link" key={index} to={''}>
          {brand}
        </AtpLink>
      ))}
    </div>
  );
};

export default AtpNotFound;
