import React, { FC } from "react";
import styled from "styled-components";

const PerformanceDescription: FC = ({ children }) => (
  <Content>{children}</Content>
);

export default PerformanceDescription;

const Content = styled.p`
  font-size: 20px;
  text-align: justify;
  max-width: 890px;
  min-height: 60px;
  width: 100%;
`;
