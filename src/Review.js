export default function Review(props) {
    return (
        <div className='Review'>
            <h3>Review Id: {props.id}</h3>
            <span>{props.comment}</span>
        </div>
    );
}