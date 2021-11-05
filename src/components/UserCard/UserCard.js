import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import styles from "../../style/styles";

const UserCard = ({ user, openChat }) => {
  return (
    <Paper >
      <Box
        m={2}
        px={3}
        py={1}
        key={user.id}
        sx={styles.around}
        className="userCard"
      >
        <Typography>{user.username}</Typography>
        <Button onClick={() => openChat(user.id)}>Написать</Button>
      </Box>
    </Paper>
  );
};

export default UserCard;
