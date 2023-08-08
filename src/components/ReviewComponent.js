import { useState } from "react"

const ReviewComponent = () => {
    let [reviews, setReviews] = useState([
        { id: 1, comment: 'comment 1' },
        { id: 2, comment: 'comment 2' },
        { id: 3, comment: 'comment 3' },
        { id: 4, comment: 'comment 4' }
    ])

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
                                <tr>
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