import { useState } from "react"

const CategoryComponent = () => {
    let [categories, setCategories] = useState([
        { id: 1, name: 'c1' },
        { id: 2, name: 'c2' },
        { id: 3, name: 'c3' },
        { id: 4, name: 'c4' }
    ])

    return (
        <>
            <h1>Category</h1>
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
                                <tr>
                                    <td>{category.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default CategoryComponent;