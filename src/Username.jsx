import React from "react";
import { useAppStore } from "./stores/app-store";

const Username = () => {
  //*jika ambil semua data dari store (cara basic) tidak disaranakan
  //const store = useAppStore();

  //*jika ambil data tertentu dari store (lebih bagus dan efisien)
  const username = useAppStore((state) => state.username);
  const updateUsername = useAppStore((state) => state.updateUsername);
  console.log("Render Username");

  return (
    <div>
      <p>Username: {username}</p>
      <br />
      <input
        type="text"
        placeholder="New Username"
        onChange={(event) => {
          const newUsername = event.target.value;
          updateUsername(newUsername);
        }}
      />
    </div>
  );
};

export default Username;
