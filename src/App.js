import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/user/user';
import Address from './components/address/address';
import Product from './components/product/product';
import Review from './components/review/review';
import Category from './components/category/category';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/addresses" element={<Address />} />
        <Route path="/products" element={<Product />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;