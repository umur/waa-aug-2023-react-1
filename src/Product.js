export default function Product(props) {
    return (
        <div className='Product'>
            <span>Id: {props.id}</span>
            <span>Name: {props.name}</span>
            <span>Price: {props.price}</span>
            <span>Rating: {props.rating}</span>
        </div>
    );
}