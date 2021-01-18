import React, { useRef, useState } from "react";
import mobiscroll from "@mobiscroll/react-lite";

import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

const Slider = ({ maxValue, valueslider, namedate }) => {
  const setRef = useRef();
  const [selectedItem, setselectedItem] = useState(0);

  const onSliderChange = (value) => {
    valueslider(value);
    setselectedItem(value);
  };

  return (
    <>
      <mobiscroll.Form theme="ios" themeVariant="auto">
        <mobiscroll.FormGroup inset>
          <mobiscroll.Slider
            // disabled={}
            ref={setRef}
            value={selectedItem}
            onChange={(e) => onSliderChange(e)}
            step="1"
            min="0"
            max={maxValue}
            theme="ios"
            themeVariant="light"
            data-highlight="false"
          />
          <div
            className="text-center"
            style={{ fontWeight: "bolder", marginTop: "15px" }}
          >
            {new Date(namedate).toDateString()}
          </div>
        </mobiscroll.FormGroup>
      </mobiscroll.Form>
    </>
  );
};

export default Slider;
// HASTA LA VISTA BABY
//                      ______
//                    <((((((\\\
//                    /      . }\
//                    ;--..--._|}
// (\                 '--/\--'  )
//  \\                | '-'  :'|
//   \\               . -==- .-|
//    \\               \.__.'   \--._
//    [\\          __.--|       //  _/'--.
//    \ \\       .'-._ ('-----'/ __/      \
//     \ \\     /   __>|      | '--.       |
//      \ \\   |   \   |     /    /       /
//       \ '\ /     \  |     |  _/       /
//        \  \       \ |     | /        /
//         \  \      \        /
