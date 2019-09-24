import React from "react";
import styled from "styled-components";
import DarkmodeToggleButton from "./DarkmodeToggleButton";

const Header = styled.header`
  z-index: 10;
  flex-shrink: 0;
  height: 70px;
  width: 100%;
  background: #e4961d;
  text-align: center;
  box-shadow: 0 5px 5px rgba(87, 59, 69, 0.6);
`;

const Headline = styled.h1`
  font-size: 1.6em;
`;

function Title({ toggleTheme }) {
  return (
    <Header>
      <Headline className="headline">ATfinder</Headline>
      <DarkmodeToggleButton toggleTheme={toggleTheme} />
    </Header>
  );
}

export default Title;
