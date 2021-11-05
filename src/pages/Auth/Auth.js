import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import styles from "../../style/styles";

const Auth = () => {
  const { login } = useActions();
  const { error, loading } = useSelector((state) => state.auth);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function auth(e) {
    e.preventDefault();
    login({ username, password });
  }

  if (loading) {
    return (
      <>
        <Box sx={styles.fullHeight}>
          <Typography variant="h4" sx={styles.center}>
            Загрузка...
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <Box sx={styles.fullHeight}>
      <Paper elevation={4}>
        <Box p={6} sx={{ backgroundColor: "#caebf5" }}>
          <form onSubmit={auth}>
            <Typography variant="h4" sx={styles.center}>
              Авторизация
            </Typography>
            <Typography sx={{ ...styles.error, ...styles.center }}>
              {error}
            </Typography>
            <Box m={2}>
              <Paper>
                <TextField
                  label="Логин"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                ></TextField>
              </Paper>
            </Box>
            <Box m={2}>
              <Paper>
                <TextField
                  label="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                ></TextField>
              </Paper>
            </Box>
            <Box sx={styles.center}>
              <Button type="submit">Войти</Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default Auth;
