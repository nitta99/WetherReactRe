import React from "react";

type DayWeaterProps = {
  title: string;
  weater: React.ReactNode;
};

export const DayWeather = ({ title, weater }: DayWeaterProps) => {
  return (
    <>
      <div className="titleBlock">{title}</div>
      <div weater={weater} className="weatherBlock"></div>
    </>
  );
};
