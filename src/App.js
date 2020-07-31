import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav.js";
import { Home } from "./components/Home.js";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./constants/theme";
import { getTheme } from "./getTheme.js";
import { Root } from "./styles.js";
import "./App.css";
import { setGlobal, useGlobal } from "reactn";

function App() {
  const [theme, setTheme] = useState("dark");
  const [theTheme, setTheTheme] = useGlobal("onTheme");

  console.log(useGlobal("onTheme")[0]);

  useEffect(() => {
    if (theTheme == false) setTheme("dark");
    else setTheme("light");
  });

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Root>
        <body>
          <Nav></Nav>
          <main>
            <Home></Home>
          </main>
        </body>
      </Root>
    </ThemeProvider>
  );
}

export default App;
