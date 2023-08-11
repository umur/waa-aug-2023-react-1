import { useState } from 'react';
import './App.css';
import CategoryComponent from './components/Category/CategoryComponent';
import ProductComponent from './components/Product/ProductComponent';
import ReviewComponent from './components/Review/ReviewComponent';
import UserComponent from './components/User/UserComponent';
import AddressComponent from './components/Address/AddressComponent';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  const [component, setComponent] = useState(null);

  const handleClick = (value) => {
    switch (value) {
      case 'addresses': setComponent(<AddressComponent />); break;
      case 'products': setComponent(<ProductComponent />); break;
      case 'users': setComponent(<UserComponent />); break;
      case 'categories': setComponent(<CategoryComponent />); break;
      case 'reviews': setComponent(<ReviewComponent />); break;
      default: break;
    }
  }

  return (
    <div className="App">
      {/* <input type="button" value="Get Products" onClick={() => handleClick('products')} />
      <input type="button" value="Get Categories" onClick={() => handleClick('categories')} />
      <input type="button" value="Get Users" onClick={() => handleClick('users')} />
      <input type="button" value="Get Reviews" onClick={() => handleClick('reviews')} />
      <input type="button" value="Get Addresses" onClick={() => handleClick('addresses')} /> */}
      <ul>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/categories'>Categories</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/reviews'>reviews</Link>
        </li>
        <li>
          <Link to='/addresses'>Addresses</Link>
        </li>
      </ul>
      {/* {component} */}
      <Routes>
        <Route path='/products' element={<ProductComponent />} />
        <Route path='/categories' element={<CategoryComponent />} />
        <Route path='/users' element={<UserComponent />} />
        <Route path='/reviews' element={<ReviewComponent />} />
        <Route path='/addresses' element={<AddressComponent />} />
      </Routes>
    </div>
  );
}

export default App;
