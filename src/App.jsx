import { Routes, Route } from 'react-router-dom';
import { Home, Navigation, Shop, SignIn } from './routes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
