import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const LittleWatch: FC = () => (
  <Player>
    <PlayCircle icon={faPlayCircle} />
  </Player>
);

export default LittleWatch;

const PlayCircle = styled(FontAwesomeIcon)`
  font-size: 100px;
  color: #fff;
  transition: transform 0.5s ease;
`;

const Player = styled.div`
  width: 710px;
  height: 397px;
  background-color: #ddd;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${PlayCircle} {
    transform: scale(1.2);
  }
`;
