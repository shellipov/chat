/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard/UserCard";
import { Box, Paper, Typography } from "@mui/material";
import styles from "../../style/styles";

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
      <Box sx={styles.fullHeight}>
        <Paper elevation={4} sx={{backgroundColor: "#caebf5" }}>
          <Box p={5}>
            {loading && <Typography variant="h4">Загрузка...</Typography>}

            {error && (
              <>
                <Typography variant="h4">Ошибка</Typography>
                <Typography>{error}</Typography>
              </>
            )}

            {users.length > 0 && (
              <>
                <Typography p={5} variant="h4">
                  Пользователи
                </Typography>
                {users
                  .filter((user) => user.id !== userData.id)
                  .map((user) => (
                    <UserCard key={user.id} user={user} openChat={openChat} />
                  ))}
              </>
            )}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Users;
