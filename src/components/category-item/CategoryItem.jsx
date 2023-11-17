import React from 'react';
import CategoryWrapper from './Category.styles';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <CategoryWrapper>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </CategoryWrapper>
  );
};

export default CategoryItem;
