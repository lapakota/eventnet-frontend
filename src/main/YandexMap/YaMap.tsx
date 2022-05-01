import { Circle, Clusterer, Map, YMaps } from "react-yandex-maps";
import React from "react";
import "../Main.css";
import Event from "../../models/Event";
import { observer } from "mobx-react-lite";
import globalStore from "../../stores/GlobalStore";

const CIRCLE_RADIUS = 5;
const MAX_ZOOM = 20;
const MIN_ZOOM = 4;

const circleOptions = {
  fillColor: "#008D8E",
  strokeColor: "#008D8E",
  strokeOpacity: 0.9,
  strokeWidth: 10,
};

const defaultCircleOptions = {
  onMouseOver: () => {
    console.log("Over");
  },
  onMouseEnter: () => {
    console.log("Enter");
  },
  onClick: () => {
    console.log("Enter");
  },
};
function createCircles(events: Array<Event>) {
  const circles: Array<JSX.Element> = [];
  events.forEach((event) => {
    circles.push(
      <Circle
        geometry={[event.info.coordinates, CIRCLE_RADIUS]}
        options={circleOptions}
        key={event.id}
        defaultOptions={defaultCircleOptions}
      />
    );
  });
  return circles;
}

const mapStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
} as const;

const mapOptions = {
  exitFullscreenByEsc: true,
  minZoom: MIN_ZOOM,
  yandexMapAutoSwitch: true,
};

const { eventStore, mapStore } = globalStore;

const YaMap = observer(({ className }: { className: string }) => {
  const currentMapState = {
    center: mapStore.coordinates,
    zoom: 10,
  };

  const onMapClick = (event: any) => {
    const currentCoordinates = event.get("coords");
  };

  return (
    <YMaps className="yandex-maps">
      <Map
        style={mapStyle}
        state={currentMapState}
        className={className}
        options={mapOptions}
        onClick={onMapClick}
        instanceRef={(map: any) => {
          if (map !== null) {
            map.behaviors.enable("scrollZoom");
            map.behaviors.disable("dblClickZoom");
            map.behaviors.disable("rightMouseButtonMagnifier");
          }
        }}
      >
        <Clusterer>{createCircles(eventStore.events)}</Clusterer>
      </Map>
    </YMaps>
  );
});

export default YaMap;
