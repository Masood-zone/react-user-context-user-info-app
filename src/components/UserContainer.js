import { useContext, useState } from "react";
import { UserContextInfo } from "./UserContext";

export default function UserContainer() {
  const { data } = useContext(UserContextInfo);
  const [user, setUser] = useState();
  return (
    <div>
      {user ? (
        <h2>Hello, {user.name}</h2>
      ) : (
        <div>
          <h3>Logged out!</h3>
        </div>
      )}

      <button onClick={() => setUser(data)}>Login</button>
      <button onClick={() => setUser()}>Logout</button>
    </div>
  );
}
