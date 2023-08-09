import React from 'react';
import Categories from './Categories';
import Products from './Products';
import './Products.css';

const ProductsPage: React.FC = () => {
  return <div>
    <div className='product-page-title'>Products</div>
    <Categories />
    {/**
     * Place Products List Here
     */}
  </div>
}

export default ProductsPage;