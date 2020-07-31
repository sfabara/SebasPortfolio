import styled, { css } from "styled-components";

export const Root = styled.html`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.background};
  height: 200rem;
`;

export const Meow = styled.button`
  color: ${(props) => props.theme.hoverColor};
  background-color: ${(props) => props.theme.hoverColor};
  margin: 2rem;
`;

export const Head = styled.header`
  position: fixed;
  width: 100%;
  background-color: transparent;
  top: 0rem;
  transition: 0.6s;
  z-index: 100000;
  text-decoration: none;
  &.sticky {
    background-color: ${(props) => props.theme.accent};
  }
`;

export const StickyHead = styled(Head)`
  background-color: red;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-90%);
  background-color: ${(props) => props.theme.accent};
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
  outline: 0;
  & h3 {
    color: ${(props) => props.theme.textColor};
    font-size: 2.2rem;
    margin: 0rem 2rem;
    text-decoration: none;
  }
`;

export const NavLinksStyle = styled.div`
  display: flex;
  flex-grow: 9;
  position: relative;

  align-items: center;
  justify-content: center;
  & ul {
    margin: 1rem 0rem 0rem 0rem;
    position: relative;
  }
  & li {
    display: inline;
    margin: 0rem 4rem;
    font-size: 3.3rem;
    position: relative;
  }
  & a {
    display: inline-block;
    margin: 1rem 0rem;
    text-decoration: none;
    position: relative;
    color: ${(props) => props.theme.textColor};
  }
`;
