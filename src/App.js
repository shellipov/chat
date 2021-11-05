import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components//Header/Header";
import {Container} from '@mui/material'
import './style/main.scss'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Container maxWidth="sm">

        <AppRouter />
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
