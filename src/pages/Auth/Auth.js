import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import "./style.scss";

const Auth = () => {
  const { login } = useActions();
  const { error, loading } = useSelector((state) => state.auth);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function auth() {
    login({ username, password });
  }

  if (loading) {
    return (
      <>
        <h1>Загрузка...</h1>
      </>
    );
  }

  return (
    <section className="auth_page">
      <div className="form">
        <h1>Авторизация</h1>
        <div className="error_block">{error}</div>
        <input
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
        ></input>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <button onClick={auth} type="submit">
          Войти
        </button>
      </div>
    </section>
  );
};

export default Auth;
