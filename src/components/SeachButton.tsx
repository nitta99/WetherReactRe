import React from "react";
import { GetWeather } from "./GetWeater";
import { Button as MUIButton } from "@mui/material";

export const SeachButton = () => {
  return (
    <MUIButton variant="contained" onClick={GetWeather} type="submit">
      検索
    </MUIButton>
  );
};
