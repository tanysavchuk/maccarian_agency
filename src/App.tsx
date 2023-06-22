import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
