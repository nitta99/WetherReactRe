export const GetWeather = (props) => {
  const { area } = props;
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

      // span生成
      const span_kyo = document.createElement("span");
      // spanに今日の天気を設定
      span_kyo.innerText = kyo;
      // 今日の天気のブロックを取得
      const kyo_weather = document.getElementById("kyo");
      // 表示内容を初期化
      kyo_weather.textContent = null;
      // spanを追加
      kyo_weather.appendChild(span_kyo);

      // span生成
      const span_asu = document.createElement("span");
      // spanに明日の天気を設定
      span_asu.innerText = asu;
      // 明日の天気のブロック取得
      const asu_weather = document.getElementById("asu");
      // 表示内容を初期化
      asu_weather.textContent = null;
      // spanを追加
      asu_weather.appendChild(span_asu);

      // span生成
      const span_asatte = document.createElement("span");
      // spanに明後日の天気を設定
      span_asatte.innerText = asatte;
      // 明後日の天気のブロック追加
      const asatte_weather = document.getElementById("asatte");
      // 表示内容を初期化
      asatte_weather.textContent = null;
      // sapn追加
      asatte_weather.appendChild(span_asatte);
    })
    .catch((e) => {
      console.log(e); //エラーをキャッチし表示
    });
};
