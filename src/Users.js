import User from "./User";

export default function Users(props) {
  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        {props.userList.map((item) => {
          return (
            <User
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              id={item.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}
