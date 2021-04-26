import React, { FC } from "react";
import styled from "styled-components";

const SearchBox: FC = () => <Box type="text" placeholder="検索" />;

export default SearchBox;

const Box = styled.input`
  max-width: 865px;
  width: 100%;
  height: 49px;
  border: solid 1px #000;
  border-radius: 50px;
  font-size: 20px;
  padding: 5px 15px;
  box-sizing: border-box;
`;
