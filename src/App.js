/* eslint-disable */
import React, { useState, useEffect } from "react";
import Map from "./Map";
import Slider from "./Slider";
import axios from 'axios'


function App() {
  const [mark, setmark] = useState([]);
  const [alldata, setalldata] = useState([]);
  const [maxvalue, setmaxvalue] = useState(0);
  const [datename, setdatename] = useState("");

  const datahandller = (selectedItem) => {
    alldata.map((o, i) => {
      if (i === selectedItem) {
        setmark(o[1]);
        setdatename(o[0]);
      }
    });
  };


  useEffect(() => {

    axios.get(`http://www.wizbucket.com/api/products/readevent.php`)
    .then(
      (data) => {
        setalldata(Object.entries(data.data));
        setmark(Object.entries(data.data)[0][1]);
        setdatename(Object.entries(data.data)[0][0]);
        setmaxvalue(Object.entries(data.data).length);

      },
      (error) => {
        console.error(error);
      }
    );
    setInterval(async () => {
      axios.get(`http://www.wizbucket.com/api/products/readevent.php`)
      .then(
        (data) => {
          if(data.data===alldata){
            console.log("son iguales")
          }else{

                console.log(mark)
                // setnewmark(mark.push(o[1]));
              
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }, 5000);

  
  }, []);






  return (
    <>
      <Slider
        maxValue={maxvalue}
        valueslider={datahandller}
        namedate={datename}

      />
      <Map dataMap={mark}/>
    </>
  );
}

export default App;
