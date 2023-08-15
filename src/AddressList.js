import { useEffect, useState } from "react";
import Addresses from "./Addresses";
import axios from "axios";

export default function AddressList() {
  let [addressState, setAddressState] = useState([]);

  const getAddresses = async () => {
    const result = await axios.get("http://localhost:8080/addresses");
    setAddressState(result.data);
  };
  useEffect(() => {
    getAddresses();
  }, []);
  return (
    <div>
      <h1>Address</h1>
      <Addresses addressList={addressState} />
    </div>
  );
}
