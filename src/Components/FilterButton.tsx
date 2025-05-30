import React from "react";
import Button from "@mui/material/Button";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface FilterButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={<TuneIcon />}
      endIcon={<ArrowDropDownIcon />}
      sx={{
        textTransform: "none",
        color: "var(--gray)",
        fontFamily: "Readex Pro",
        fontWeight: 300,
        fontSize: "12px",
        lineHeight: "100%",
        backgroundColor: "var(--white)",
      }}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
