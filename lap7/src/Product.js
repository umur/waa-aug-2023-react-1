import { useNavigate } from "react-router";

export default function Product(props) {

  const navigate = useNavigate();


  const onProductClicked = () => {
      navigate('/productDetails/'+ props.id);
  }


  return (
    <div>
      <h1>
        {props.id} - 
      {props.name} - {props.price} - 
      {props.rating}</h1> <button onClick={onProductClicked}>Product Detail</button>
    </div>
  );
}
