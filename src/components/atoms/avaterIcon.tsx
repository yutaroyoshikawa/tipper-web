import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  avaterImage: string;
  avaterName: string;
};

const Avater: FC<Props> = ({ avaterImage, avaterName }) => (
  <ImageWrapper>
    {avaterImage ? (
      <Image width={55} height={55} alt={avaterName} src={avaterImage} />
    ) : (
      <UserCircle icon={faUserCircle} />
    )}
  </ImageWrapper>
);

export default Avater;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  padding-right: 14px;
`;

const UserCircle = styled(FontAwesomeIcon)`
  font-size: 55px;
`;
