import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/CategoriesPreview';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
