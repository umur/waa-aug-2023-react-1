import Address from "./Address";

export default function Addresses(props) {
  return (
    <table>
      <thead>
        <th>Street</th>
        <th>City</th>
        <th>Zip</th>
      </thead>
      <tbody>
        {props.addressList.map((item) => {
          return (
            <Address
              street={item.street}
              city={item.city}
              zip={item.zip}
              id={item.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}
