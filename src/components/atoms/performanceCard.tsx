import React, { FC, useMemo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
// import { useGetPerformanceQuery } from "../../generated/graphql";

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
}) => {
  // const { loading } = useGetPerformanceQuery({
  //   variables: {
  //     performanceId: name,
  //   },
  // });

  const startDate = useMemo(() => dayjs(start).format("YYYY/MM/DD HH:mm"), [
    start,
  ]);

  const finishTime = useMemo(() => dayjs(finish).format("HH:mm"), [finish]);

  return (
    <div className="wrap">
      <figure>
        <img src={thumbnailSrc} alt={name} />
      </figure>
      <p>{name}</p>
      <time>
        {startDate} - {finishTime}
      </time>
      <p>{locate}</p>
    </div>
  );
};

export default styled(PerformanceCard)`
  .wrap {
  }
`;
