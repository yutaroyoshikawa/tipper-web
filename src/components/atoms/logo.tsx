import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

const Logo: FC = () => (
  <Anchor href="/">
    <LogoImg src="/images/logo.svg" />
  </Anchor>
);

export default Logo;

const Anchor = styled(Link)``;

const LogoImg = styled.img``;
