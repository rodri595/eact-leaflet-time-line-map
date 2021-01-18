/* eslint-disable */
import React, { useRef, useEffect } from "react";
import { Map as MapContainer, TileLayer, LayersControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "./style.css";
import * as all from "leaflet-with-bouncing-markers";

import img1 from "./Earth_icons/1.png";
import img2 from "./Earth_icons/2.png";
import img3 from "./Earth_icons/3.png";
import img4 from "./Earth_icons/4.png";
import img5 from "./Earth_icons/5.png";
import img6 from "./Earth_icons/6.png";
import img7 from "./Earth_icons/7.png";
import img8 from "./Earth_icons/8.png";
import img9 from "./Earth_icons/9.png";
import img10 from "./Earth_icons/10.png";
import img11 from "./Earth_icons/11.png";
import img12 from "./Earth_icons/12.png";
import img13 from "./Earth_icons/13.png";
import img14 from "./Earth_icons/14.png";
import img15 from "./Earth_icons/15.png";
import img16 from "./Earth_icons/16.png";
import img17 from "./Earth_icons/17.png";
import img18 from "./Earth_icons/18.png";
import img19 from "./Earth_icons/19.png";
import img20 from "./Earth_icons/20.png";
import img21 from "./Earth_icons/21.png";
import img22 from "./Earth_icons/22.png";
import img23 from "./Earth_icons/23.png";
import img24 from "./Earth_icons/24.png";
import img25 from "./Earth_icons/25.png";
import img26 from "./Earth_icons/26.png";
import img27 from "./Earth_icons/27.png";
import img28 from "./Earth_icons/28.png";
import img29 from "./Earth_icons/29.png";
import img30 from "./Earth_icons/30.png";
import img31 from "./Earth_icons/31.png";
import img32 from "./Earth_icons/32.png";
import img33 from "./Earth_icons/33.png";
import img34 from "./Earth_icons/34.png";
import img35 from "./Earth_icons/35.png";
import img36 from "./Earth_icons/36.png";
import img37 from "./Earth_icons/37.png";
import img38 from "./Earth_icons/38.png";
import img39 from "./Earth_icons/39.png";
import img40 from "./Earth_icons/40.png";

const icon1 = new L.Icon({
  iconUrl: img1,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon2 = new L.Icon({
  iconUrl: img2,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon3 = new L.Icon({
  iconUrl: img3,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon4 = new L.Icon({
  iconUrl: img4,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon5 = new L.Icon({
  iconUrl: img5,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon6 = new L.Icon({
  iconUrl: img6,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon7 = new L.Icon({
  iconUrl: img7,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon8 = new L.Icon({
  iconUrl: img8,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon9 = new L.Icon({
  iconUrl: img9,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon10 = new L.Icon({
  iconUrl: img10,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon11 = new L.Icon({
  iconUrl: img11,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon12 = new L.Icon({
  iconUrl: img12,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon13 = new L.Icon({
  iconUrl: img13,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon14 = new L.Icon({
  iconUrl: img14,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon15 = new L.Icon({
  iconUrl: img15,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon16 = new L.Icon({
  iconUrl: img16,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon17 = new L.Icon({
  iconUrl: img17,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon18 = new L.Icon({
  iconUrl: img18,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon19 = new L.Icon({
  iconUrl: img19,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon20 = new L.Icon({
  iconUrl: img20,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon21 = new L.Icon({
  iconUrl: img21,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon22 = new L.Icon({
  iconUrl: img22,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon23 = new L.Icon({
  iconUrl: img23,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon24 = new L.Icon({
  iconUrl: img24,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon25 = new L.Icon({
  iconUrl: img25,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon26 = new L.Icon({
  iconUrl: img26,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon27 = new L.Icon({
  iconUrl: img27,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon28 = new L.Icon({
  iconUrl: img28,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon29 = new L.Icon({
  iconUrl: img29,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon30 = new L.Icon({
  iconUrl: img30,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon31 = new L.Icon({
  iconUrl: img31,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon32 = new L.Icon({
  iconUrl: img32,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon33 = new L.Icon({
  iconUrl: img33,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon34 = new L.Icon({
  iconUrl: img34,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon35 = new L.Icon({
  iconUrl: img35,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon36 = new L.Icon({
  iconUrl: img36,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon37 = new L.Icon({
  iconUrl: img37,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon38 = new L.Icon({
  iconUrl: img38,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon39 = new L.Icon({
  iconUrl: img39,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});
const icon40 = new L.Icon({
  iconUrl: img40,
  iconSize: [30, 30],
  iconAnchor: [-2, -2],
  popupAnchor: [18, 6],
  tooltipAnchor: [30, 20],
});

const Map = ({ dataMap }) => {
  const mapRef = useRef();

  const iconHandler = (num) => {
    if (num === 1) {
      return icon1;
    }
    if (num === 2) {
      return icon2;
    }
    if (num === 3) {
      return icon3;
    }
    if (num === 4) {
      return icon4;
    }
    if (num === 5) {
      return icon5;
    }
    if (num === 6) {
      return icon6;
    }
    if (num === 7) {
      return icon7;
    }
    if (num === 8) {
      return icon8;
    }
    if (num === 9) {
      return icon9;
    }
    if (num === 10) {
      return icon10;
    }
    if (num === 11) {
      return icon11;
    }
    if (num === 12) {
      return icon12;
    }
    if (num === 13) {
      return icon13;
    }
    if (num === 14) {
      return icon14;
    }
    if (num === 15) {
      return icon15;
    }
    if (num === 16) {
      return icon16;
    }
    if (num === 17) {
      return icon17;
    }
    if (num === 18) {
      return icon18;
    }
    if (num === 19) {
      return icon19;
    }
    if (num === 20) {
      return icon20;
    }
    if (num === 21) {
      return icon21;
    }
    if (num === 22) {
      return icon22;
    }
    if (num === 23) {
      return icon23;
    }
    if (num === 24) {
      return icon24;
    }
    if (num === 25) {
      return icon25;
    }
    if (num === 26) {
      return icon26;
    }
    if (num === 27) {
      return icon27;
    }
    if (num === 28) {
      return icon28;
    }
    if (num === 29) {
      return icon29;
    }
    if (num === 30) {
      return icon30;
    }
    if (num === 31) {
      return icon31;
    }
    if (num === 32) {
      return icon32;
    }
    if (num === 33) {
      return icon33;
    }
    if (num === 34) {
      return icon34;
    }
    if (num === 35) {
      return icon35;
    }
    if (num === 36) {
      return icon36;
    }
    if (num === 37) {
      return icon37;
    }
    if (num === 38) {
      return icon38;
    }
    if (num === 39) {
      return icon39;
    }
    if (num === 40) {
      return icon40;
    }
  };
 
  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        return layer.remove();
      }
    });

    if (!(Array.isArray(dataMap) && !dataMap.length)) {
      dataMap.map((o) => {
        let marker = L.marker(
          [parseFloat(o.lat), parseFloat(o.lng)],
          {
            icon: iconHandler(o.icon),
          },
          {
            bounceOnAddOptions: { duration: 500, height: 200, loop: 2 },
          }
        ).addTo(map);
        marker.bounce({
          duration: Math.floor(Math.random() * (2000 - 300 + 1) + 400),
          height: 300,
        });
      });
      setTimeout(() => {
        dataMap.map((o) => {
          L.marker(
            [parseFloat(o.lat), parseFloat(o.lng)],
            {
              icon: new L.divIcon({
                className: "",
                html: `<div style="${`
        border: 2px solid ${o.color};
        border-radius: 100%;
        height: 50px;
        width: 50px;
        animation: pulsate  ${o.pulserate}s ease-out;
        animation-iteration-count: infinite;
        `}"></div>`,
              }),
            },
            {
              bounceOnAddOptions: { duration: 500, height: 200, loop: 2 },
            }
          )
            .bindPopup(
              `<div>
          <div>
            <span>Location :</span>
            ${o.location}
          </div>
          <br />
          <div>${o.descr}</div>
          <br />
          <div>${o.date}</div>
          <br />
        </div>`
            )
            .addTo(map);
        });
      }, 2400);
    }
    
  }, [dataMap]);

  return (
    <>
      <MapContainer
        ref={mapRef}
        minZoom={2.6}
        maxZoom={20}
        bounceAtZoomLimits={true}
        maxBoundsViscosity={0.95}
        maxBounds={[
          [90, 180],
          [-90, -180],
        ]}
        bounds={[
          [75.62863223279015, 179.29687500000003],
          [-57.98480801923985, -151.87500000000003],
        ]}
      >
        <LayersControl position="topleft">
          <LayersControl.BaseLayer checked name="custom">
            <TileLayer
              noWrap={true}
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Dark">
            <TileLayer
              noWrap={true}
              url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};
Map.defaultProps = {
  dataMap: [],
  newdataMap: [],
};
export default Map;
