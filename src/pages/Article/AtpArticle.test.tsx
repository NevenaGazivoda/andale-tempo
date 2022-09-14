import React from 'react';
import { render } from '@testing-library/react';
import AtpArticle from './AtpArticle';
import { Article } from '../../models/article.model';

test('renders article', () => {
    render(<AtpArticle handleAddToCart={function (clickedItem: Article): void {
        throw new Error('Function not implemented.');
    }} />);
});
