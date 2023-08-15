import { useEffect, useState } from "react";

import Products from "./Products";
import axios from "axios";




function ListProduct() {

    let initialState = [
        // { id: 1, name: "Product 1", price: 100 ,rating:5}, 
        // { id: 2, name: "Product 2", price: 200,rating:2 },
        // { id: 3, name: "Product 3", price: 300,rating:3 }
    ];

    let [productsState, setProductsState] = useState(initialState);

   

    const getProducts = async () => {
        const result = await axios.get("http://localhost:8080/products");
        console.log(result.data);
        setProductsState(result.data);
    }

    useEffect(() => {
        getProducts();
    },[]);


   


    return (
        <div>

          <Products 
          productList={productsState} 
      
          />

          

        </div>
    )
}

export default ListProduct;