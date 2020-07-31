import React, { useState, useEffect } from "react";
import { ReactComponent as AcornIcon } from "../img/acorn.svg";
import { ReactComponent as InfoIcon } from "../img/info.svg";
import { ReactComponent as CaretIcon } from "../img/caret-down.svg";
import { Switch, Paper, createMuiTheme, Button } from "@material-ui/core";

import { ThemeProvider } from "styled-components";
import { THEMES } from "../constants/theme";
import { getTheme } from "../getTheme.js";
import { Head, DropDown, NavLinksStyle, Sticky } from "../styles.js";
import { setGlobal, useGlobal } from "reactn";

import "../styles/Nav.css";

setGlobal({ onTheme: false });

export function Nav(props) {
  const [theme, setTheme] = useState("light");
  const [theTheme, setTheTheme] = useGlobal("onTheme");

  useEffect(() => {
    if (theTheme == false) setTheme("dark");
    else setTheme("light");

    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  });

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Head>
        <Navbar>
          <NavLink></NavLink>
          <NavItem icon={<CaretIcon />}>
            <DropdownMenu onChange={theme} />
          </NavItem>
        </Navbar>
      </Head>
    </ThemeProvider>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
/*

*/
function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function NavLink(props) {
  return (
    <NavLinksStyle>
      <ul className="nav-links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">EXPERIENCE</a>
        </li>
        <li>
          <a href="#">PROJECTS</a>
        </li>
      </ul>
    </NavLinksStyle>
  );
}

function DropdownMenu(props) {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <DropDown>
      <div className="icon-button">
        <DropdownItem leftIcon={<InfoIcon />}>
          <h3>About this website</h3>
        </DropdownItem>
        <DropdownItem
          leftIcon={<SwitchBitch theme={props.theme}></SwitchBitch>}
        >
          <h3>Night Mode</h3>
        </DropdownItem>
      </div>
    </DropDown>
  );
}

function SwitchBitch({ handleTheme }) {
  const [theme, setTheme] = useGlobal("onTheme");

  return <Switch checked={theme} onChange={() => setTheme(!theme)}></Switch>;
}

/*
<Switch
checked={themeName.mode}
onChange={() => {
  setThemeName(
    themeName.mode === "THEMES.DARK?"
      ? { mode: "THEMES.LIGHT" }
      : { mode: "THEMES.DARK" }
  );
}}
/>

*/
