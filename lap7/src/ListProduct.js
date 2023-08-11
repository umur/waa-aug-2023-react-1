import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function ListProduct() {
  const [productState, setProductState] = useState([]);

  const getProducts = async () => {
    const result = await axios.get("http://localhost:8080/products");

    setProductState(result.data);
  };

  const addProduct = async () => {
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const rating = parseFloat(document.getElementById("rating").value);

    const data = {
      name: name,
      price: price,
      rating: rating,
    };

    console.log(data);
    const result = await axios.post("http://localhost:8080/products", { data });
    console.log(result);
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <form id="productForm">
        Name:
        <input type="text" name="name" id="name" />
        <br></br>
        Price:
        <input type="number" name="price" id="price" />
        <br></br>
        Rating:
        <input type="number" name="rating" id="rating" />
        <br></br>
      </form>
      <button onClick={addProduct}>Submit</button>
      <br></br>
      <br></br>
      <br></br>

      {productState.map((product) => {
        return (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        );
      })}

      {JSON.stringify(productState)}
    </div>
  );
}
