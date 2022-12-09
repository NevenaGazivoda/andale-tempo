import React from 'react';
import { render } from '@testing-library/react';
import AtpList from './AtpList';

test('renders list', () => {
  render(<AtpList listName={''} list={[]} />);
});
