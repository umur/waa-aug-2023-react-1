import React, { useState, useEffect } from "react"
import axios from "axios";

import './user.css'

export default function User() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/users")
            .then((response) => {
                setList(response.data);
                console.log(response.data)
            

            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <h1>hello from user</h1>
            <ul>
                <div>
                    {list.map((list, index) => {
                        if (list.id > 0) { // Corrected this line
                            return (
                                <li key={list.id}>
                                    <div>{list.firstName}</div>
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

