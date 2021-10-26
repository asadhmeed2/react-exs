import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./user";
import { AddUser } from "./addUser";
import "./crud.style.css";
export const Croud = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let usersData = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setUsers(usersData.data);
  };
  const onDeleteBtnClick = async (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
     await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  };
  const onAddClick = async (usersData) => {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/users/`,
      usersData
    );
    if (response.status === 201) {
      usersData.id = 1;
      let usersNewData = [...users, usersData];
      setUsers(usersNewData);
    }
  };

  return (
    <div className="crud">
      <div className="formAddUser">
        <AddUser title={'Add'} onAddClick={onAddClick} />
      </div>
      <div className="users">
        {users.map((user) => {
          return (
            <User
              key={user.id}
              name={user.name}
              email={user.email}
              userName={user.username}
              id={user.id}
              onClick={onDeleteBtnClick}
            />
          );
        })}
      </div>
    </div>
  );
};
