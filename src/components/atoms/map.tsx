import React, { FC } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import styled from "styled-components";

const MapBox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoieXV0YXJveW9zaGlrYXdhIiwiYSI6ImNqcHVzcWo0eDA5Z3Izd3BvYXY3M2RpenQifQ.ewNB2cyvJmgf8b4VWdWpyQ",
});

type Props = {
  latitude: number;
  longitude: number;
};

const Map: FC<Props> = ({ latitude, longitude }) => (
  <Wrap>
    <MapBox
      /* eslint-disable-next-line react/style-prop-object */
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "319px",
        width: "100%",
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[latitude, longitude]} />
      </Layer>
    </MapBox>
  </Wrap>
);

export default Map;

const Wrap = styled.div`
  width: 100%;
  max-width: 610px;
  height: 428px;
`;
