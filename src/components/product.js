import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Product(props) {

    const navigate = useNavigate();
    const deleteProduct = async (id) =>{
        const url="http://localhost:8080/products/" + id;
        await axios.delete(url)
        props.getProducts();
    }

    const onProductClicked = () => {
        navigate("/products/"+props.id)
    }
    return (
        <li className="list-group-item list-item d-flex justify-content-between align-items-center">
            {props.name} {props.price}$ {props.rating}
            <button className="btn btn-info info-button" onClick={onProductClicked}>Edit</button>
            <button className="btn btn-danger delete-button" onClick={async () => {
                await deleteProduct(props.id)
            }}>Delete</button>
        </li>

    )
}