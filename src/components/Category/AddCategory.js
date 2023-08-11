import axios from "axios";
import { useState } from "react";

const AddCategory = ({ setComponent }) => {
    const [name, setName] = useState('');

    const handleSave = () => {
        const new_category = {
            name
        }
        axios.post('http://localhost:8080/categories', new_category)
            .then(res => {
                setComponent(null)
            })
    }

    return (
        <div>
            Name <input type="text" name='name' onChange={(e) => setName(e.target.value)} />
            <br />
            <input type='button' value="Save" onClick={handleSave} />
        </div>
    )
}

export default AddCategory;