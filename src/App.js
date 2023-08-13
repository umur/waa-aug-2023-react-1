import UserList from "./UserList";
import AddressList from "./AddressList";
import { Routes, Route } from "react-router-dom";
import AddressDetail from "./AddressDetail";

function App() {
  return (
    <div className="container">
      <h1>Hello from react</h1>
      <UserList />
      <AddressList />
      <Routes>
        <Route path="/addresses/:id" element={<AddressDetail />} />
      </Routes>
    </div>
  );
}

export default App;
