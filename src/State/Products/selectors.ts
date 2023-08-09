import { createSelector } from 'reselect';

import { ProductsState } from './Types/ProductsState';
import { State } from '../State';
import { Category } from 'Types/Products/Category';

const productState = ({ products }: State) => products;

const categories = createSelector(productState, ({ categories }: ProductsState): Category[] => categories);
const currentCategory = createSelector(productState, ({ currentCategory }: ProductsState): Category | null => currentCategory)

const selectors = {
    categories,
    currentCategory
}

export default selectors;
