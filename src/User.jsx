import React from "react";
import { useState } from "react";
import { useAppStore } from "./stores/app-store";
import { shallow } from "zustand/shallow";

const User = () => {
  const [user, getUser, logoutUser] = useAppStore(
    (state) => [state.user, state.getUser, state.logoutUser],
    shallow
  );
  const [username, setUsername] = useState("");
  return (
    <div>
      <p>Login by username</p>
      <br />
      <input
        type="text"
        placeholder="New Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type="button" onClick={() => getUser(username)}>
        Login
      </button>
      {user.login && (
        <>
          <p>Logged in as {user.name}</p>
          <button type="button" onClick={logoutUser}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default User;
