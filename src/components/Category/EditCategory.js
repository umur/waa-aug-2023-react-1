import axios from "axios";
import { useEffect, useState } from "react";

const EditCategory = ({ id, setComponent }) => {
    const [name, setName] = useState('');

    const handleSave = () => {
        const new_category = {
            name
        }
        axios.put(`http://localhost:8080/categories/${id}`, new_category)
            .then(res => {
                setComponent(null)
            })
    }

    const fetchData = () => {
        axios.get(`http://localhost:8080/categories/${id}`)
            .then(res => {
                setName(res.data.name);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            Name <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type='button' value="Save" onClick={handleSave} />
        </div>
    )
}

export default EditCategory;