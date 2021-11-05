import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const Message = ({ mes, user_id }) => {
  return (
    <Box
      my={1}
      px={1}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: mes.id === user_id ? "flex-end" : "flex-start",
      }}
    >
      <Paper
        sx={{
          backgroundColor: mes.id === user_id ? "#CEF2B2" : "#F2B2B2",
        }}
      >
        <Box p={1} >
          <Typography>{mes.message}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Message;
