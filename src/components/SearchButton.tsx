import { MouseEvent } from "react";

type SearchButtonProps = {
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
};

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <>
      <input
        className="searchButton"
        type="button"
        value="検索"
        onClick={onClick}
      />
    </>
  );
};
