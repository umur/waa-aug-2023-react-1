import { useEffect, useState } from "react";
import axios from "axios";

const API_URL='http://localhost:8100/';
const ProductDetail =(props)=>{

    let [productState, setProductState]=useState(null);

    const getById=async ()=>{
        let response = await axios.get(API_URL+'products/'+props.id)
        setProductState(response.data)
    }

    useEffect(()=>{
        getById();

    },[props.id])

    return (
        <div>
            {/* {JSON.stringify(productState)} */}
            <li>
                <ul>
                    Name: { productState? productState?.name:'Not Found'}
                    
                </ul>
                <ul>
                    Price: { productState? productState?.price:'Not Found'}
                    
                </ul>
                <ul>
                    Review: { productState?productState?.rating:'Not Found'}
                    
                </ul>
            </li>

            {/* {productState.id} */}
        </div>
    )


}

export default  ProductDetail;