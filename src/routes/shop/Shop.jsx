import { Fragment, useContext } from 'react';
import { categoriesContext } from '../../contexts/categories.context';
import { ProductCard } from '../../components';
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(categoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title].map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
