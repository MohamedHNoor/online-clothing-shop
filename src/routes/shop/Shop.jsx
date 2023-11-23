import { useContext } from 'react';
import { productsContext } from '../../contexts/Products.context';
import { ProductCard } from '../../components';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(productsContext);
  return (
    <div className='products-container'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
