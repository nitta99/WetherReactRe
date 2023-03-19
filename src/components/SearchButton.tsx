import { GetWeather } from "./GetWeather";
import { Button as MUIButton } from "@mui/material";

const getWeather = () => {};

export const SearchButton = () => {
  return (
    <>
      <MUIButton
        size="small"
        variant="contained"
        type="submit"
        onClick={GetWeather}
      >
        検索
      </MUIButton>
    </>
  );
};
