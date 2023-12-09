import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments } from '../utils/firebase/Firebase.js';

export const productsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
