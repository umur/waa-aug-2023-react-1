// import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from 'react';
import ProductList from './ProductList';
// import axios from "axios";


// const API_URL='http://localhost:8100/';

function App() {

  // const [products, setProducts]=useState([]);

  // const searchProducts=async()=>{
  //   let response = await axios.get(API_URL+'products');
  //   setProducts(response.data)
  //   console.log(response.data)
  // }
  // useEffect(
  //   () => {
  //     searchProducts();
  //   },[]
  // )

  return (
    <div className="App">
      <ProductList/>

    </div>
  )
}

export default App;
