export default function Category(props) {
    return (
        <div className="Category">
            <span>Id: {props.id}</span>
            <span>Name: {props.name}</span>
        </div>
    );
}