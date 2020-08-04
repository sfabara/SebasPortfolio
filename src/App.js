import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav.js";
import { Home } from "./components/Home.js";
import { Social } from "./components/Social.js";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./constants/theme";
import { getTheme } from "./getTheme.js";
import { Root } from "./styles/appStyles.js";
import "./styles/App.css";
import { setGlobal, useGlobal } from "reactn";

function App() {
  const [theme, setTheme] = useState("dark");
  const [theTheme, setTheTheme] = useGlobal("onTheme");

  console.log(useGlobal("onTheme")[0]);

  useEffect(() => {
    if (theTheme == false) setTheme("light");
    else setTheme("dark");
  });

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Root>
        <body>
          <Nav></Nav>
          <Social></Social>

          <main>
            <Home></Home>
          </main>
        </body>
      </Root>
    </ThemeProvider>
  );
}

export default App;
