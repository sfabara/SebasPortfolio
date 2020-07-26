import React, { useState } from "react";
import Home from "./components/Home.js";
import { ReactComponent as AcornIcon } from "./img/acorn.svg";
import { ReactComponent as InfoIcon } from "./img/info.svg";
import "./App.css";

function App() {
  return (
    <Navbar>
      <NavLink></NavLink>
      <NavItem icon={<AcornIcon />}>
        <DropdownMenu />
      </NavItem>
      <NavItem icon={<InfoIcon />}>
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
        <DropdownItem leftIcon={<InfoIcon />} />
      </div>
    </div>
  );
}

export default App;
