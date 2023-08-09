import React from "react";
import Product from "./Product";
const ProductList = ({ products, handleClick }) => {
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Type</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          {products.map((data) => (
            <Product data={data} handleClick={handleClick} />
          ))}
        </tbody>
      </table>
      {}
    </div>
  );
};

export default ProductList;

// function ProductList(){

// }

// const ProductList=()=><div>Mohammad</div>
