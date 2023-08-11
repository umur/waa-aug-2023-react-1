import axios from "axios"
import { useEffect, useState } from "react"

const ReviewComponent = () => {
    let [reviews, setReviews] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/reviews')
        .then(res=>{
            setReviews(res.data)
        })
    }, [])

    return (
        <>
            <h1>Reviews</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => {
                            return (
                                <tr key={review.id}>
                                    <td>{review.id}</td>
                                    <td>{review.comment}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ReviewComponent;