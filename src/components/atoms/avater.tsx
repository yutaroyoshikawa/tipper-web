import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  avaterImage: string;
  avaterName: string;
};

const Avater: FC<Props> = ({ avaterImage, avaterName }) => (
  <Wrapper>
    <ImageWrapper>
      {avaterImage ? (
        <Image width={55} height={55} alt="アバター画像" src={avaterImage} />
      ) : (
        <UserCircle icon={faUserCircle} />
      )}
    </ImageWrapper>
    <AvaterName>{avaterName}</AvaterName>
  </Wrapper>
);

export default Avater;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  padding-right: 14px;
`;

const AvaterName = styled.p`
  font-size: 16px;
  color: #e87b7b;
`;

const UserCircle = styled(FontAwesomeIcon)`
  font-size: 55px;
`;
