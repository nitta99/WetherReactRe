import React, { useEffect, useState } from "react";
import { Title } from "./components/Title";
import "./styles.css";
import { DayWeather } from "./components/DayWeater";
import { SelectArea } from "./components/SelectArea";

export const App = () => {
  const [area, setArea] = useState();
  const [kyo, setKyo] = useState();
  const [asu, setAsu] = useState();
  const [asatte, setAsatte] = useState();

  return (
    <>
      <Title />
      <SelectArea />
      <DayWeather title="今日の天気" weater={kyo} />
      <DayWeather title="明日の天気" weater={asu} />
      <DayWeather title="明後日の天気" weater={asatte} />
    </>
  );
};
