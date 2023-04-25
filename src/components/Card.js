import React, { useState } from "react";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteuser, updateuser } from "../redux/Users";
const Card = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [newuser, setnewuser] = useState("");
  const uselist = useSelector((state) => state.users.value);
  const clean = () => {
    setname("");
    setusername("");
  };
  const pass = () => {
    dispatch(
      addUser({
        id: uselist[uselist.length - 1].id + 1,
        name,
        username,
      })
    );
    clean();
  };
  const pass1 = (id) => {
    dispatch(updateuser({ id: id, username: newuser }));
  };
  return (
    <div className="app ">
      <div className="adduser ">
        <input
          className="m-3"
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          className="m-3"
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <button
          className="btn btn-success m-3"
          onClick={() => {
            pass();
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayuser">
        {uselist.map((user) => {
          return (
            <div className="car">
              <h1> Name :{user.name}</h1>
              <h1> Username :{user.username}</h1>
              <input
                className="m-3"
                type="text"
                placeholder="New Username"
                onChange={(e) => setnewuser(e.target.value)}
              />
              <button
                className="btn btn-success m-3"
                onClick={() => {
                  pass1(user.id);
                }}
              >
                Update Username
              </button>
              <button
                className="btn btn-danger m-3"
                onClick={() => {
                  dispatch(deleteuser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
