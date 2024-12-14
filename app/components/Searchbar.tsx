import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import { ReactElement } from "react";
import { css } from "styled-system/css";

interface SearchbarProps {
  tempQuery: string;
  setTempQuery: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Searchbar = ({
  tempQuery,
  setTempQuery,
  setQuery,
}: SearchbarProps): ReactElement => {
  return (
    <TextField.Root
      placeholder="Search"
      value={tempQuery}
      onChange={(e) => {
        setTempQuery(e.target.value);
      }}
    >
      <TextField.Slot side={"right"}>
        <MagnifyingGlassIcon
          height="16"
          width="16"
          onClick={(e) => {
            setQuery(tempQuery);
          }}
          className={css({ _hover: { cursor: "pointer" } })}
        />
      </TextField.Slot>
    </TextField.Root>
  );
};
