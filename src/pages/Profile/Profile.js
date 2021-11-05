import React from "react";
import { Button, Box, Typography, Paper } from "@mui/material";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import styles from "../../style/styles";

const Profile = () => {
  const { username } = useSelector((state) => state.auth.user);
  const { logout } = useActions();
  return (
    <>
      <Box sx={styles.fullHeight}>
        <Paper elevation={4} sx={{ backgroundColor: "#caebf5" }}>
          <Box p={5}>
            <Typography variant="h4" m={3} sx={styles.center}>
              Профиль
            </Typography>
            <Typography m={1} sx={styles.center}>
              {`Привет, ${username} ! Это твой профиль`}
            </Typography>
            <Typography m={1} sx={styles.center}>
              Ты можешь выйти из профиля
            </Typography>
            <Box m={1} sx={styles.center}>
              <Button onClick={logout}>Выйти</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Profile;
