import { combineReducers, createStore } from '@reduxjs/toolkit';
import productsReducer from './Products/reducer';
import { State } from './State';

export const rootReducer = combineReducers<State>({
  products: productsReducer
});

export const store = createStore(rootReducer);