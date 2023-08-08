export default function User(props) {
    return (
        <div className='User'>
            <span>Id: {props.id}</span>
            <span>Email: {props.email}</span>
            <span>Password: {props.password}</span>
            <span>Fname: {props.fname}</span>
            <span>Lname: {props.lname}</span>
        </div>
    );
}