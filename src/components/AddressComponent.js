import { useState } from "react"

const AddressComponent = () => {
    let [addresses, setAddresses] = useState([
        { id: 1, street: 'North 1 Street', zip: '52557', city: 'Fairfield' },
        { id: 2, street: 'North 2 Street', zip: '52557', city: 'Fairfield' },
        { id: 3, street: 'North 3 Street', zip: '52557', city: 'Fairfield' },
        { id: 4, street: 'North 4 Street', zip: '52557', city: 'Fairfield' }
    ])

    return (
        <>
            <h1>Address</h1>
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
                                <tr>
                                    <td>{address.street}</td>
                                    <td>{address.zip}</td>
                                    <td>{address.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AddressComponent;