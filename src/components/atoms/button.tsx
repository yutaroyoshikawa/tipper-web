import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

const Button: FC<Props> = ({ children, onClick, disabled = false }) => (
  <CustomButton onClick={() => onClick()} disabled={disabled}>
    {children}
  </CustomButton>
);

export default Button;

const CustomButton = styled.button`
  width: 100%;
  height: 55px;
  display: block;
  line-height: 55px;
  text-align: center;
  background-color: #fff;
  border-radius: 28px;
  font-size: 21px;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
