import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import AddAddress from "./AddAddress"
import EditAddress from "./EditAddress"

const AddressComponent = () => {
    let [addresses, setAddresses] = useState([])
    const [component, setComponent] = useState(null)

    const handleClick = (value, id) => {
        switch (value) {
            case 'edit': setComponent(<EditAddress id={id} setComponent={setComponent}/>); break;
            case 'add': setComponent(<AddAddress setComponent={setComponent} />); break;
            default: break;
        }
    }

    const handleDelete = useCallback((id) => {
        axios.delete(`http://localhost:8080/addresses/${id}`)
            .then(res => {
                alert(`Record with id: ${id} deleted!`)
                fetchData();
            })
    }, [])

    const fetchData = () => {
        axios.get('http://localhost:8080/addresses')
        .then(res => {
            setAddresses(res.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, [component, handleDelete]);


    return (
        <>
            <h1>Address</h1>


            <input type="button" value="Add" className="add-btn" onClick={() => handleClick('add')} />
            <table>
                <thead>
                    <tr>
                        <th>Street</th>
                        <th>Zip</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addresses.map(address => {
                            return (
                                <tr key={address.id}>
                                    <td>{address.street}</td>
                                    <td>{address.zip}</td>
                                    <td>{address.city}</td>
                                    <td className="control">
                                        <p onClick={() => handleClick('edit', address.id)}>[Edit]</p>  <p onClick={() => handleDelete(address.id)}>[Delete]</p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>



            {component}
        </>
    )
}

export default AddressComponent;