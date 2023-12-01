import { createContext, useState } from "react";
import UserContainer from "./UserContainer";
export const UserContextInfo = createContext();

export default function UserContext() {
  const [data, setData] = useState({
    name: "Kirito",
    telephone: "024256846",
    email: "kiritkaisel@gmail.com",
  });

  return (
    <UserContextInfo.Provider value={{ data }}>
      <UserContainer />
    </UserContextInfo.Provider>
  );
}
