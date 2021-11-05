/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";

const Users = () => {
  const history = useHistory();
  const { users, loading, error } = useSelector((state) => state.users);
  const userData = useSelector((state) => state.auth.user);
  const { getUsersData } = useActions();

  function openChat(id) {
    history.push(`/chat:${id}`);
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      {loading && <h1>Загрузка...</h1>}

      {error && (
        <>
          <h1>Ошибка</h1>
          <p>{error}</p>
        </>
      )}

      {users.length > 0 && (
        <>
          <h1>Пользователи</h1>
          {users.filter(user => user.id !== userData.id ).map((user) => (
            <div key={user.id} className="userCard">
              <span >{user.username}</span>
              <button onClick={() => openChat(user.id)}>Написать</button>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Users;
