import { LapTimerIcon, LetterCaseUppercaseIcon } from "@radix-ui/react-icons";
import React, { ReactElement } from "react";
import { css } from "styled-system/css";
import { Sorting } from "~/types/types";

interface SortIconProps {
  wayOfSorting: Sorting;
  setWayOfSorting: React.Dispatch<React.SetStateAction<Sorting>>;
}

const iconStyles = css({
  _hover: { cursor: "pointer" },
});

export const SortIcon = ({
  wayOfSorting,
  setWayOfSorting,
}: SortIconProps): ReactElement => {
  return (
    <>
      {wayOfSorting == Sorting.Alphabetically ? (
        <LapTimerIcon
          className={iconStyles}
          onClick={() => {
            setWayOfSorting(Sorting.PublishingDate);
          }}
        />
      ) : (
        <LetterCaseUppercaseIcon
          className={iconStyles}
          onClick={() => {
            setWayOfSorting(Sorting.Alphabetically);
          }}
        />
      )}
    </>
  );
};
