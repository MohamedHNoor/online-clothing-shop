import { useContext } from 'react';
import { categoriesContext } from '../../contexts/categories.context';
import { CategoryPreview } from '../../components';
import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(categoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
