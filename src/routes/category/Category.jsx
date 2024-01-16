import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';

const Category = () => {
  const [products, setProducts] = useState();

  return <div>Category</div>;
};

export default Category;
