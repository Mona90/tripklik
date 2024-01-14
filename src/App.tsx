import { Provider } from 'react-redux';
import store from './store/Store';
import { Route, Routes } from 'react-router-dom';
import ProductList from './pages/productList';
import SingleProducts from './pages/singleProducts';


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" index element={<ProductList/>} />
        <Route path="/products/:productId" element={<SingleProducts/>} />
    </Routes>
    </Provider>
  );
}

export default App;
