import { useState } from "react";

const ProductForm = ({ addProduct }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (productName && productPrice) {
        const newProduct = { name: productName, price: parseFloat(productPrice) };
        addProduct(newProduct);
        setProductName('');
        setProductPrice('');
      }
    };
  
    return (
      <div>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  };


  export default ProductForm;