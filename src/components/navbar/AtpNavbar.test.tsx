import React from 'react';
import { render } from '@testing-library/react';
import AtpNavbar from './AtpNavbar';
import { MemoryRouter } from 'react-router-dom';

test('renders navbar', () => {
  render(
    <MemoryRouter>
      <AtpNavbar totalItems={0} />
    </MemoryRouter>
  );
});
