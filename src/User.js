import axios from "axios";

export default function User(props) {
  const handleDelete = async () => {
    const result = await axios
      .delete("http://localhost:8080/users/" + props.id)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>
        <input type="button" value="Delete" onClick={handleDelete}></input>
      </td>
    </tr>
  );
}
