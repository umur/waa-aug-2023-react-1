import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import axios from 'axios'

const API_URL='http://localhost:8100/products';

export default function ProductList(){
    let initialState = [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
    ];

    let [productListState, setProductListState]= useState(initialState);
    let [selectedProduct, setSelectedProduct]=useState(1);

    const setSelectedProductId=(id)=>{
        setSelectedProduct(id);
    }

    const getProducts=async()=>{
        let result =await axios.get(API_URL);
        console.log(result.data)
        setProductListState(result.data);
        
    }
    useEffect(()=>{
        getProducts();
    },[])

    return (
        <div>
            <Products
                productList={productListState}
                setSelectedProduct={setSelectedProductId}
        
            />

            <ProductDetail
                id={selectedProduct}
            />
        </div>

    )

}