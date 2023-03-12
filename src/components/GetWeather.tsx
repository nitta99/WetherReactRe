import React, { useRef } from "react";

type AreaProps = {
  area: string;
};

export const GetWeather = ({ area }: AreaProps) => {
  // 気象庁の天気予報APIのURL
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
      // 今日,明日,明後日の天気予報を変数に設定
      const [kyo, asu, asatte] = weathers;

      const stack_kyo = React.createElement("Stack");
      // spanに今日の天気を設定
      stack_kyo.innerText = kyo;
      // 今日の天気のブロックを取得
      const kyo_weather = document.getElementById("kyo");
      // 表示内容を初期化
      kyo_weather.textContent = null;
      // spanを追加
      kyo_weather.appendChild(stack_kyo);
    })
    .catch((e) => {
      console.log(e); //エラーをキャッチし表示
    });
};
