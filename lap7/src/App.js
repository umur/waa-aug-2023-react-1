import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import ListProduct from "./ListProduct";
import ProductDetails from "./ProductDetails";

function App() {


  return (
    
    <div className="App">
    
    <ul>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/products' element={<ListProduct/>} />
        <Route path='/productDetails/:id' element={<ProductDetails/>} />
      </Routes>

    </div>
  );
}

export default App;
