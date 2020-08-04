import React, { useState, useEffect } from "react";

import { ReactComponent as InfoIcon } from "../img/info.svg";
import { ReactComponent as CaretIcon } from "../img/caret-down.svg";
import { Switch } from "@material-ui/core";

import { ThemeProvider } from "styled-components";
import { getTheme } from "../getTheme.js";
import {
  HeadStyle,
  DropDownStyle,
  NavLinksStyle,
  NavItemStyle,
  IconButtonStyle,
  MenuItemStyle,
} from "../styles/navStyles.js";
import { setGlobal, useGlobal } from "reactn";

import "../styles/Nav.css";

setGlobal({ onTheme: false });

export function Nav(props) {
  const [theme, setTheme] = useState("light");
  const [theTheme, setTheTheme] = useGlobal("onTheme");

  useEffect(() => {
    if (theTheme == false) setTheme("light");
    else setTheme("dark");

    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  });

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <HeadStyle>
        <Navbar>
          <NavLink></NavLink>
          <NavItem icon={<CaretIcon />}>
            <DropdownMenu />
          </NavItem>
        </Navbar>
      </HeadStyle>
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
    <NavItemStyle>
      <IconButtonStyle>
        <a href="#" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>

        {open && props.children}
      </IconButtonStyle>
    </NavItemStyle>
  );
}

function NavLink(props) {
  return (
    <NavLinksStyle>
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
    </NavLinksStyle>
  );
}

function DropdownMenu(props) {
  function DropdownItem(props) {
    return (
      <MenuItemStyle href="#">
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </MenuItemStyle>
    );
  }

  return (
    <DropDownStyle>
      <IconButtonStyle>
        <DropdownItem leftIcon={<InfoIcon />}>
          <h3>About this website</h3>
        </DropdownItem>
        <DropdownItem
          leftIcon={<SwitchBitch theme={props.theme}></SwitchBitch>}
        >
          <h3>Night Mode</h3>
        </DropdownItem>
      </IconButtonStyle>
    </DropDownStyle>
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
