import { Category } from './Category';

export interface Product {
  'id': number;
  'title': boolean;
  'description': string;
  'price': number;
  'discountPercentage': number;
  'rating': number;
  'stock': number;
  'brand': string;
  'category': Category;
  'thumbnail': string;
  'images': string[];
}
