import React from 'react';
import { render } from '@testing-library/react';
import AtpPrice from './AtpPrice';

test('renders react app', () => {
    render(<AtpPrice price={0} />);
});
