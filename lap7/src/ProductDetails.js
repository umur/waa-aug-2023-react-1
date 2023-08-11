import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetails(props) {

    const params = useParams();
    const [productState, setProductState] = useState([]);

    const getProductById = async () => {
        const result = await axios.get('http://localhost:8080/products/'+ params.id);
        setProductState(result.data);
    }

    useEffect(() => {
        getProductById();
    },[params.id])

    return(
        <div>
            <h1>
                {params.id}
            </h1>
            {JSON.stringify(productState)}
        </div>
    )

  }