import React, { useState, useEffect } from "react"
import axios from "axios";

import './review.css'

export default function Review() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/reviews")
            .then((response) => {
                setList(response.data);
                console.log(response.data)


            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <h1>hello from review</h1>
            <ul>
                <div>
                    {list.map((list, index) => {
                        if (list.id > 0) { // Corrected this line
                            return (
                                <li key={list.id}>
                                    <div>{list.comment}</div>
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

