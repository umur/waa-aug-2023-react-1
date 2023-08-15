import axios from "axios";
import { useNavigate } from "react-router";

export default function Address(props) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = await axios
      .delete("http://localhost:8080/addresses/" + props.id)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const onAddressClicked = () => {
    console.log(props.id);
    navigate("/addresses/" + props.id);
  };

  return (
    <tr onClick={onAddressClicked}>
      <td>{props.street}</td>
      <td>{props.city}</td>
      <td>{props.zip}</td>
      <td>
        <input type="button" value="Delete" onClick={handleDelete}></input>
      </td>
    </tr>
  );
}
