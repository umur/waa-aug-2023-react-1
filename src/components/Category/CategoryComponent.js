import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import EditCategory from "./EditCategory"
import AddCategory from "./AddCategory"

const CategoryComponent = () => {
    let [categories, setCategories] = useState([])
    const [component, setComponent] = useState(null)

    const fetchData = () => {
        axios.get('http://localhost:8080/categories')
        .then(res=>{
            setCategories(res.data)
        })
    }

    const handleClick = (value, id) => {
        switch (value) {
            case 'edit': setComponent(<EditCategory id={id} setComponent={setComponent}/>); break;
            case 'add': setComponent(<AddCategory setComponent={setComponent} />); break;
            default: break;
        }
    }

    const handleDelete = useCallback((id) => {
        axios.delete(`http://localhost:8080/categories/${id}`)
            .then(res => {
                alert(`Record with id: ${id} deleted!`)
                fetchData();
            })
    }, [])

    useEffect(()=>{
        fetchData()
    }, [component, handleDelete])

    return (
        <>
            <h1>Category</h1>
            <input type="button" value="Add" className="add-btn" onClick={() => handleClick('add')} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(category => {
                            return (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                    <td className="control">
                                        <p onClick={() => handleClick('edit', category.id)}>[Edit]</p>  <p onClick={() => handleDelete(category.id)}>[Delete]</p>
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

export default CategoryComponent;