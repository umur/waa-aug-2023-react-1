import { useState } from "react";
import ProductForm from './ProductForm';

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    const addProduct = (newProduct) => {
      setProducts([...products, newProduct]);
    };
  
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
        <ProductForm addProduct={addProduct} />
      </div>
    );
  };


  export default ProductList;