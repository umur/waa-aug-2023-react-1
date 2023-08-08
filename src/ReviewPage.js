import { useEffect, useState } from 'react';
import CreateReview from './CreateReview';
import Review from './Review';
export default function ReviewPage() {
    let [reviewState, setReviewState] = useState({
        reviews: []
    })

    function addReview(newReview) {
        setReviewState((prevState) => ({
            ...prevState,
            reviews: [...prevState.reviews, newReview],
        }));
    }

   
    

    function listReviews() {
        return reviewState.reviews.map((review, i) => {
            return <Review key={i} id={review.id} comment={review.comment} />
        });
    }

   

    return (
        <div>
        <CreateReview addReview={addReview} />
        {listReviews(reviewState.reviews)}
        </div>
    );
}