import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [userInfo, setUserInfo] = useState({
    userId: "",
    email: "",
    userName:"",
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
}
