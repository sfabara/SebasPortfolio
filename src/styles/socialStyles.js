import styled, { css } from "styled-components";

export const SocialStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.accent};
  position: fixed;
  margin: 24rem 0rem 0rem 0rem;
  border-radius: 1rem;
  & h2 {
    font-size: 4rem;
  }
  & h2:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;
