import React from 'react';
import useCategories from 'State/Products/Hooks/useCategories';
import './Products.css';

const Categories: React.FC = () => {
  const { categories, setCurrentCategory, currentCategory } = useCategories();

  return <div className='category-container'>
    {categories.map(category => 
      <div 
        key={category} 
        className={category === currentCategory ? 'selected-category' : 'category'}
        onClick={() => setCurrentCategory(category)}
      >
        <div>{category}</div>
      </div>
    )}
  </div>
}

export default Categories;