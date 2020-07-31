import React, { useState } from "react";
import { ReactComponent as AcornIcon } from "../img/acorn.svg";
import { ReactComponent as InfoIcon } from "../img/info.svg";
import { ReactComponent as CaretIcon } from "../img/caret-down.svg";
import { Switch, Paper, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import "../styles/Nav.css";

export function Nav() {
  return (
    <Navbar>
      <NavLink></NavLink>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

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
      <li>
        <a href="#">ART</a>
      </li>
    </ul>
  );
}

function DropdownMenu() {
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
    <div className="dropdown">
      <div className="icon-button">
        <DropdownItem leftIcon={<InfoIcon />}>
          <h3>About this website</h3>
        </DropdownItem>
        <DropdownItem leftIcon={<AcornIcon />} />
        <DropdownItem leftIcon={<SwitchHandler />} />
      </div>
    </div>
  );
}

function SwitchHandler() {
  const [state, setState] = useState(false);
  return (
    <Switch
      checked={state}
      onChange={() => {
        setState(!state);
      }}
    />
  );
}
