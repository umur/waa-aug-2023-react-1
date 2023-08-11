import axios from "axios";
import { useState } from "react";

const AddAddress = ({setComponent}) => {
    const [street, setStreet] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');

    const handleSave = () => {
        const new_address = {
            street,
            zip,
            city
        }
        axios.post('http://localhost:8080/addresses', new_address)
            .then(res => {
                setComponent(null)
            })
    }

    return (
        <div>
            Street <input type="text" name='street' onChange={(e) => setStreet(e.target.value)} />
            <br />
            Zip <input type="text" name='zip' onChange={(e) => setZip(e.target.value)} />
            <br />
            City <input type="text" name='city' onChange={(e) => setCity(e.target.value)} />
            <br />
            <input type='button' value="Save" onClick={handleSave} />
        </div>
    )
}

export default AddAddress;