import React, { useState, useEffect } from "react";

const FetchData = (props: any) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(
      "https://www.jma.go.jp/bosai/forecast/data/forecast/" +
        props.CityCode +
        ".json",
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => alert("error"));
  }, []);

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  const place = data[0].timeSeries[0].areas[0].area.name;
  const today_Weather = data[0].timeSeries[0].areas[0].weathers[0];

  return (
    <div>
      <p>{place}</p>
      <p>今日: {today_Weather}</p>
    </div>
  );
};

export default FetchData;
