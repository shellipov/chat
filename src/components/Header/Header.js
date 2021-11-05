import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

const Header = () => {
  const {isAuth, user} = useSelector((state) => state.auth);

  return (
    <header>
      <div className="header_logo">CHAT</div>
      {isAuth && (
        <>
          <nav className="">
            <Link to={"/users"}>Пользователи</Link>
            <Link to={"/profile"}>Профиль</Link>
          </nav>
          <div className="username">
            <span>{`Вы вошли как ${user.username}`}</span>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
