import { useContext } from 'react';
import Button from '../button/Button';
import { CartContext } from '../../contexts/Cart.context';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
