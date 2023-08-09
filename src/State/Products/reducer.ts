import { ProductsActionTypes, ProductsActions } from './actions';
import { ProductsState } from './Types/ProductsState';

const initialState: ProductsState = {
    categories: [],
    currentCategory: null
};

export default function productsReducer(state: ProductsState = initialState, action: ProductsActionTypes): ProductsState {
    switch (action.type) {
        case ProductsActions.SET_PRODUCT_CATEGORIES:
            return {
                ...state,
                categories: [...action.payload],
            };
        case ProductsActions.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: null,
            };
        default:
            return {
                ...state,
            };
    }
}
