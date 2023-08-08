import { useState } from 'react';

export default function CreateReview({ addReview }) {
    let [reviewState, setReviewState] = useState({
        id: 'default',
        comment: 'default'
    });

    const onChanged = (e) => {
        setReviewState({ ...reviewState, [e.target.name]: e.target.value });
    }

    const createReview = () => {
        const newReview = {
            id: reviewState.id,
            comment: reviewState.comment
        };
        addReview(newReview);
        setReviewState({ id: 'default', comment: 'default' });
    }

    return (
        <div>
            id: <input
                type='text'
                value={reviewState.id}
                onChange={onChanged}
                name='id'
            />
            Comment: <input
                type='text'
                value={reviewState.comment}
                onChange={onChanged}
                name='comment'
            />
            <button
                type='submit'
                onClick={createReview}
            >Create Review</button>
        </div>
    );
}
