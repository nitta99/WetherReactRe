import "./styles.css";
import { SearchConditions } from "./components/SearchConditions";
import { DayWeather } from "./components/DayWeather";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

export const App = () => {
  const [area, setArea] = useState<string | HTMLInputElement>();
  const [kyo, setKyo] = useState();
  const [asu, setAsu] = useState();
  const [asatte, setAsatte] = useState();

  const onClickSearch = () => {
    if (area === "") {
      alert("エリアが指定されていません");
      return;
    }

    const api_url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${area}.json`;

    //APIからJSONデータを取得する
    fetch(api_url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // JSONをパース
        const json_str = JSON.stringify(result);
        const json = JSON.parse(json_str)[0];
        // 天気情報を取得
        const weathers = json.timeSeries[0].areas[0].weathers;

        setKyo(weathers);
        setAsu(weathers);
        setAsatte(weathers);
      })
      .catch((e) => {
        console.log(e); //エラーをキャッチし表示
      });
  };

  const onChangeWeather = (event: SelectChangeEvent<HTMLInputElement>) => {
    setArea(event.target.value);
  };

  return (
    <div className="App">
      <h1>天気情報</h1>
      <SearchConditions onClick={onClickSearch} onChange={onChangeWeather} />
      <DayWeather title="今日の天気" weather={kyo} />
      <DayWeather title="明日の天気" weather={asu} />
      <DayWeather title="明後日の天気" weather={asatte} />
    </div>
  );
};
