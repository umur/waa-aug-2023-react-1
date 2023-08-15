import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function AddressDetail(props) {
  const params = useParams();

  let [addressDetailState, setAddressDetailState] = useState([]);

  const getAddressById = async () => {
    const result = await axios.get(
      "http://localhost:8080/addresses/" + params.id
    );
    setAddressDetailState(result.data);
  };

  useEffect(() => {
    getAddressById();
  }, [params.id]);

  return (
    <div>
      <h1>{params.id}</h1>
      {JSON.stringify(addressDetailState)}
    </div>
  );
}
