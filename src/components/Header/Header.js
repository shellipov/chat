import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Box, Typography } from "@mui/material";
import styles from "../../style/styles";
import "./style.scss";

const Header = () => {
  const { isAuth, user } = useSelector((state) => state.auth);

  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#b2f2d7",
      }}
    >
      <Typography variant="h4" sx={{ textShadow: "1px 1px 2px gray" }}>
        Чат
      </Typography>
      {isAuth && (
        <>
          <Box sx={styles.center}>
            <Box m={2}>
              <Link className={"header_link"} to={"/users"}>
                Пользователи
              </Link>
            </Box>
            <Box m={2}>
              <Link
                className="header_link"
                to={"/profile"}
              >{`Профиль ${user.username}`}</Link>
            </Box>
          </Box>
        </>
      )}
    </AppBar>
  );
};

export default Header;
