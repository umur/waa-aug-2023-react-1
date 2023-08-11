import axios from "axios";
import { useEffect, useState } from "react";

const EditAddress = ({ id, setComponent }) => {
    const [street, setStreet] = useState('');
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')

    const handleSave = () => {
        const new_address = {
            street,
            zip,
            city
        }
        axios.put(`http://localhost:8080/addresses/${id}`, new_address)
            .then(res => {
                setComponent(null)
            })
    }

    const fetchData = () => {
        axios.get(`http://localhost:8080/addresses/${id}`)
            .then(res => {
                setStreet(res.data.street);
                setCity(res.data.city);
                setZip(res.data.zip);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            Street <input type="text" name='street' value={street} onChange={(e) => setStreet(e.target.value)} />
            <br />
            Zip <input type="text" name='zip' value={zip} onChange={(e) => setZip(e.target.value)} />
            <br />
            City <input type="text" name='city' value={city} onChange={(e) => setCity(e.target.value)} />
            <br />
            <input type='button' value="Save" onClick={handleSave} />
        </div>
    )
}

export default EditAddress;