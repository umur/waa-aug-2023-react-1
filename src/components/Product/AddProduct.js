import axios from "axios";
import { useState } from "react";

const AddProduct = ({ setComponent }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const handleSave = () => {
        const new_product = {
            name,
            price,
            rating
        }
        axios.post('http://localhost:8080/products', new_product)
            .then(res => {
                setComponent(null)
            })
    }

    return (
        <div>
            Name <input type="text" name='name' onChange={(e) => setName(e.target.value)} />
            <br />
            Price <input type="text" name='price' onChange={(e) => setPrice(e.target.value)} />
            <br />
            Rating <input type="text" name='rating' onChange={(e) => setRating(e.target.value)} />
            <br />
            <input type='button' value="Save" onClick={handleSave} />
        </div>
    )
}

export default AddProduct;