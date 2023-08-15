import { useEffect, useState } from "react";
import axios from "axios";


export default function ProductDetail (props){

    let [productState,setProductState]=useState({
        id:1,
        name:"Product 1",
        price:100,
        rating:5

    })

    const getById=async ()=>{
        const result = await axios.get("http://localhost:8080/products/" + props.id);
        setProductState(result.data);
    }

    useEffect(()=>{
        getById();
    },[props.id])

    return (
        <div>
            {JSON.stringify(productState)}
        </div>
    )


}