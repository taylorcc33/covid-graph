import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  url: "https://coronavirus-map.p.rapidapi.com/v1/spots/summary",
  headers: {
    "x-rapidapi-key": "63243c1987mshf8418a87b0ef4a6p11b513jsnc37837b9fc3d",
    "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
  },
};

const CovidChart = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data);
        setChartData(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(chartData);
  return (
    <div>
      <p>{Object.keys(chartData).length}</p>
    </div>
  );
};

export default CovidChart;
