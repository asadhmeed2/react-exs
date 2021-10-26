import React, { useState } from "react";
import { AddUser } from "./addUser";
import axios from "axios";
export const User = ({ name, email, userName, id, onClick }) => {
  const [userData, setUserData] = useState({
    name: name,
    email: email,
    id: id,
    userName: userName,
    onClick: onClick,
  });
  const [userIsUpdated, setUserIsUpdated] = useState(false);
  const onDeletClick = (e) => {
    onClick(parseInt(e.target.id));
  };

  const onUpdate = async (usersData) => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${userData.id}`
      );
      setUserData({
        name: usersData.name,
        email: usersData.email,
        id: userData.id,
        onClick: userData.onClick,
      });
    } catch (e) {
      console.log(e);
    }
    setUserIsUpdated(false);
  };
  const onEditeClick = () => {
    setUserIsUpdated(true);
  };
  return (
    <div className="user">
      <h2>Name : {userData.name}</h2>
      <h3>Username : {userData.userName}</h3>
      <p>Email : {userData.email}</p>
      <input
        type="button"
        name="deleteUser"
        value="Delete user"
        onClick={onDeletClick}
        id={id}
      />
      <input
        type="button"
        name="editUser"
        value="edit user"
        onClick={onEditeClick}
        id={id}
      />
      {userIsUpdated ? <AddUser title={"Edit"} onAddClick={onUpdate} /> : ""}
    </div>
  );
};
