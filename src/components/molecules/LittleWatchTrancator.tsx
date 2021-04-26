import React, { FC } from "react";
import styled from "styled-components";
import LittleWatch from "../atoms/LittleWatch";

type Props = {
  isOpen: boolean;
};

const LittleWatchTranctor: FC<Props> = ({ isOpen }) => (
  <Trancator isOpen={isOpen}>
    <Wrap>
      <LittleWatch />
    </Wrap>
  </Trancator>
);

export default LittleWatchTranctor;

const Trancator = styled.div`
  width: 100%;
  height: ${(props: { isOpen: boolean }) => (props.isOpen ? "610px" : "0px")};
  transition: height ease 0.7s;
  overflow: hidden;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  height: 610px;
`;
