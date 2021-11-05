import React from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";

const Profile = () => {
  const { username } = useSelector((state) => state.auth.user);
  const { logout } = useActions();
  return (
    <>
      <h1>Профиль</h1>
      <p>{`Привет, ${username}!Это твой профиль`} </p>
      <p>Ты можешь выйти из профиля</p>
      <button onClick={logout}>Выйти</button>
    </>
  );
};

export default Profile;
