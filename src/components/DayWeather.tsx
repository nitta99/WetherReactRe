import { ReactNode } from "react";

type DayWeaterProps = {
  title: "今日の天気" | "明日の天気" | "明後日の天気";
  weather: ReactNode;
};

export const DayWeather = ({ title, weather }: DayWeaterProps) => {
  return (
    <>
      <div className="titleBlock">{title}</div>
      <div className="weatherBlock">{weather}</div>
    </>
  );
};
