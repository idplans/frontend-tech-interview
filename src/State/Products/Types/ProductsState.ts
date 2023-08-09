import { Category } from 'Types/Products/Category';

export interface ProductsState {
  categories: Category[];
  currentCategory: Category | null;
}