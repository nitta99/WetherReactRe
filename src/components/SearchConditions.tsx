import { MouseEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import { SearchButton } from "./SearchButton";
import { SelectArea } from "./SelectArea";

type SearchConditionsProps = {
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
  onChange: (event: SelectChangeEvent<HTMLInputElement>) => void;
};

export const SearchConditions = ({
  onClick,
  onChange
}: SearchConditionsProps) => {
  return (
    <>
      <SelectArea onChange={onChange} />
      <SearchButton onClick={onClick} />
    </>
  );
};
