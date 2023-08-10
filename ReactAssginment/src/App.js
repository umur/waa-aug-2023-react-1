import { useState } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import Product from "./Product";

function App() {
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    type: "",
    quantity: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    const productWithId = { ...newProduct, id: products.length + 1 };
    e.preventDefault();
    setProducts([...products, productWithId]);
    setNewProduct({
      id: "",
      name: "",
      type: "",
      quantity: "",
    });
  };

  const handleClick = (id) => {
    const newProducts = products.filter((data) => data.id !== id);
    setProducts(newProducts);
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sneakers",
      type: "Shoes",
      quantity: 10,
    },
    {
      id: 2,
      name: "Notebook",
      type: "Stationery",
      quantity: 20,
    },
    {
      id: 3,
      name: "Laptop",
      type: "Electronics",
      quantity: 3,
    },
    {
      id: 4,
      name: "Headphones",
      type: "Accessories",
      quantity: 15,
    },
  ]);

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      <ProductList products={products} handleClick={handleClick} />
      <AddProduct onSubmit={onSubmit} product={newProduct} onChange={onChange} />
    </div>
  );
}

export default App;
