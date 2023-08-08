import React, { useState, useEffect } from "react"
import axios from "axios";

import './category.css'

export default function Category() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/categories")
            .then((response) => {
                setList(response.data);
                console.log(response.data)


            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <h1>hello from category</h1>
            <ul>
                <div>
                    {list.map((list, index) => {
                        if (list.id > 0) { // Corrected this line
                            return (
                                <li key={list.id}>
                                    <div>{list.name}</div>
                                </li>
                            );
                        }
                        return null;
                    })}
                </div>
            </ul>
        </div>
    )
};

