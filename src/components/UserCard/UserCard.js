import React from "react";
import { Box, Paper, Typography, Button, Fade } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import styles from "../../style/styles";

const UserCard = ({ user, openChat, index }) => {
  return (
    <Fade in style={{ transitionDelay: `${100 + (index * 50)}ms` }}>
      <Paper>
        <Box
          m={2}
          px={3}
          py={1}
          key={user.id}
          sx={styles.between}
          className="userCard"
        >
          {" "}
          <AccountCircleIcon color="action" fontSize="large" />
          <Typography>{user.username}</Typography>
          <Button onClick={() => openChat(user.id)}>Написать</Button>
        </Box>
      </Paper>
    </Fade>
  );
};

export default UserCard;
