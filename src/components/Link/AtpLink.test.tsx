import React from 'react';
import { render } from '@testing-library/react';
import AtpLink from './AtpLink';

test('renders link', () => {
    render(<AtpLink to={''} />);
});
