import React, { FC } from "react";
import styled from "styled-components";
import Avater from "../atoms/avater";
import PerformanceThumbnail from "../organisms/PerformanceThumbnail";
import PerformanceDescription from "../atoms/PerformanceDescription";
import DateStatus from "../atoms/DateStatus";
import { GetPerformanceQuery } from "../../generated/graphql";

type Props = {
  performance: GetPerformanceQuery;
};

const PerformanceDetail: FC<Props> = ({ performance }) => (
  <>
    <DetailWrap>
      <DateStatus
        date={new Date(performance.performance.start)}
        end={new Date(performance.performance.finish)}
      />
      <TitleWrap>
        <PerformanceTitle>{performance.performance?.name}</PerformanceTitle>
      </TitleWrap>
      <AvaterWrap>
        <Avater
          avaterImage={performance.performance.artist.imageIcon}
          avaterName={performance.performance.artist.name}
        />
      </AvaterWrap>
      <DescriptionWrap>
        <PerformanceDescription>
          {performance.performance.discription}
        </PerformanceDescription>
      </DescriptionWrap>
    </DetailWrap>

    <PerformanceThumbnail
      thumbnail={performance.performance.thumbnail ?? ""}
      location={performance.performance.location}
    />
  </>
);

export default PerformanceDetail;

const DetailWrap = styled.div`
  width: 100%;
  min-width: 960px;
  padding: 104px 58px 0;
  box-sizing: border-box;
`;

const PerformanceTitle = styled.h1`
  font-size: 80px;
`;

const TitleWrap = styled.div`
  padding: 10px 0;
  box-sizing: border-box;
`;

const AvaterWrap = styled.div`
  padding-top: 10px;
  box-sizing: border-box;
`;

const DescriptionWrap = styled.div`
  padding-top: 10px;
  box-sizing: border-box;
`;
