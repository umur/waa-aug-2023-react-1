import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users";

export default function UserList() {
  let [usersState, setUsersState] = useState([]);

  const getUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsersState(result.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Users userList={usersState} />
    </div>
  );
}
