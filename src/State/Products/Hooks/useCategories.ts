import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Category } from 'Types/Products/Category';

import { ProductsActionTypes, ProductsActions } from '../actions';
import selectors from '../selectors';

const useCategories = (): { 
    categories: Category[]; 
    currentCategory: Category | null; 
    setCurrentCategory: (category: Category) => void
} => {
    const dispatch = useDispatch();

    const categories: Category[] = useSelector(selectors.categories);
    const currentCategory: Category | null = useSelector(selectors.currentCategory);

    React.useEffect(() => {
        const getCategories = async () => {
            try {
                const products = await axios.get('https://dummyjson.com/products/categories');

                dispatch({
                    type: ProductsActions.SET_PRODUCT_CATEGORIES,
                    payload: products.data,
                } as ProductsActionTypes);
            } catch (e) {
                console.error(e);
            }
        };

        getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setCurrentCategory = (category: Category) => {
        dispatch({
            type: ProductsActions.SET_CURRENT_CATEGORY,
            payload: category,
        } as ProductsActionTypes);
    }

    return { 
        categories,
        currentCategory,
        setCurrentCategory,
    };
};

export default useCategories;
