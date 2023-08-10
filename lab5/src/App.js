import logo from './logo.svg';
import './App.css';
import AddProduct from './compoents/AddProduct';
import ProductsTable from './pages/ProductsTable';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/addProduct/:id" element={<AddProduct />} />
        <Route path="/products" element={<ProductsTable/>} />
      </Routes>
    </div>
  );
}

export default App;
