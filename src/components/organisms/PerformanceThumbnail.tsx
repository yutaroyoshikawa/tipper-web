import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";
import Button from "../atoms/button";
import LittleWatchTrancator from "../molecules/LittleWatchTrancator";
import Map from "../atoms/map";

type Props = {
  thumbnail: string;
  location: {
    lat: number;
    lng: number;
  };
};

const PerformanceThumbnail: FC<Props> = ({ thumbnail, location }) => {
  const [isOpenLittleWatch, setIsOpenLittleWatch] = useState(false);

  const onClickWatchLittle = useCallback(() => {
    setIsOpenLittleWatch(true);
  }, []);

  const onClickCheering = useCallback(() => {
    console.log("onClickCheering");
  }, []);

  return (
    <div>
      <LittleWatchTrancator isOpen={isOpenLittleWatch} />

      <ThumbnailWrapper>
        <FunctionContainer>
          <FunctionWrapper>
            <ButtonWrapper>
              {!isOpenLittleWatch && (
                <Button onClick={onClickWatchLittle}>ちょっと見てみる</Button>
              )}
            </ButtonWrapper>

            <ButtonWrapper>
              <Button onClick={onClickCheering}>応援する</Button>
            </ButtonWrapper>
          </FunctionWrapper>
        </FunctionContainer>
        <Thumbnail src={thumbnail} alt="サムネイル" />
        <MapWrapper>
          <Map latitude={location.lat} longitude={location.lng} />
        </MapWrapper>
      </ThumbnailWrapper>
    </div>
  );
};

export default PerformanceThumbnail;

const ThumbnailWrapper = styled.figure`
  width: 100%;
  height: 352px;
  position: relative;
  background-color: #ddd;
  margin-top: 30px;
  box-sizing: border-box;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 352px;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  width: 265px;
`;

const FunctionWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  margin: none;
`;

const FunctionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 50px;
  box-sizing: border-box;
  position: absolute;
  z-index: 5;
  transform: translateY(-30px);
`;

const MapWrapper = styled.div`
  max-width: 610px;
  height: 428px;
  padding-left: 71px;
  box-sizing: border-box;
  z-index: 5;
  transform: translateY(-200px);
`;
