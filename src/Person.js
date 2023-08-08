function Person(props) {
    return (
        <div>
        <h2>Person:</h2>
        <a>{props.fname}, </a>
        <a>{props.lname}</a>
        </div>
    );
}

export default Person;