import "./styles.css";
import { Title } from "./components/Title";
import { DayWeather } from "./components/DayWeather";
import { useEffect, useState } from "react";
import { SearchButton } from "./components/SearchButton";
import { SelectArea } from "./components/SelectArea";

export const App = () => {
  const [area, setArea] = useState<string>("");
  const [kyo, setKyo] = useState<string>("");
  const [asu, setAsu] = useState<string>("");
  const [asatte, setAsatte] = useState<string>("");

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Title />
      <SelectArea area={area} />
      <SearchButton />
      <DayWeather title="今日の天気" wether={kyo} />
      <DayWeather title="明日の天気" wether={asu} />
      <DayWeather title="明後日の天気" wether={asatte} />
    </div>
  );
};
