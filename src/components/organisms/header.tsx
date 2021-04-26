import React, { FC } from "react";
import styled from "styled-components";
import Logo from "../atoms/logo";
import SeachBox from "../atoms/searchBox";
import AvaterIcon from "../atoms/avaterIcon";

const Header: FC = () => (
  <Wrap>
    <Logo />
    <SeachBox />
    <AvaterIcon avaterImage="" avaterName="" />
  </Wrap>
);

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 36px;
  box-sizing: border-box;
`;
