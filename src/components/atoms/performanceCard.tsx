import React, { FC } from "react";
import styled from "styled-components";

type PerformanceCardProps = {
  thumbnailSrc: string;
  name: string;
  start: Date;
  finish: Date;
  locate: string;
};

const PerformanceCard: FC<PerformanceCardProps> = ({
  thumbnailSrc,
  name,
  start,
  finish,
  locate,
}) => (
  <div className="wrap">
    <figure>
      <img src={thumbnailSrc} alt={name} />
    </figure>
    <p>{name}</p>
    <time>
      {start.getTime()} - {finish.getTime()}
    </time>
    <p>{locate}</p>
  </div>
);

export default styled(PerformanceCard)`
  .wrap {
  }
`;
