import React, { useState, useEffect } from "react"
import axios from "axios";

import './address.css'

export default function Address() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/address")
            .then((response) => {
                setList(response.data);
                console.log(response.data)


            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <h1>hello from address</h1>
            <ul>
                <div>
                    {list.map((list, index) => {
                        if (list.id > 0) { // Corrected this line
                            return (
                                <li key={list.id}>
                                    <div>{list.city}</div>
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

