import { Product } from 'Types/Products/Product';
import { Category } from 'Types/Products/Category';

export enum ProductsActions {
    SET_PRODUCTS = 'SET_PRODUCTS',
    SET_PRODUCT_CATEGORIES = 'SET_PRODUCT_CATEGORIES',
    SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
}

interface SetCategoriesAction {
    type: typeof ProductsActions.SET_PRODUCT_CATEGORIES;
    payload: Category[];
}

interface SetCurrentCategoryAction {
    type: typeof ProductsActions.SET_CURRENT_CATEGORY;
    payload: Category;
}

export type ProductsActionTypes = SetCategoriesAction | SetCurrentCategoryAction;
