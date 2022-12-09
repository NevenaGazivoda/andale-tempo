import React from 'react';
import { render } from '@testing-library/react';
import AtpNavbar from './AtpNavbar';
import { MemoryRouter } from 'react-router-dom';
import ShoppingCartStore from '../../utilities/ShoppingCartStore';

test('renders navbar', () => {
  render(
    <MemoryRouter>
      <AtpNavbar store={new ShoppingCartStore()} />
    </MemoryRouter>
  );
});
