import styled, { css } from "styled-components";

export const Root = styled.html`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.background};
  height: 300rem;
`;

export const Meow = styled.button`
  color: ${(props) => props.theme.hoverColor};
  background-color: ${(props) => props.theme.hoverColor};
  margin: 2rem;
`;
