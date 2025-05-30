import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  onClick: () => void;
  label?: string;
}

export const CancelButton: React.FC<ButtonProps> = ({ onClick, label = "Cancel" }) => (
  <Button
    onClick={onClick}
    sx={{
      width: "78px",
      height: "39px",
      borderRadius: "8px",
      color: "var(--deep-pink-red)",
      textTransform: "none",
      border: "1px solid var(--primary-red)",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "var(--soft-blush)",
        borderColor: "var(--primary-red)",
      },
    }}
  >
    {label}
  </Button>
);

export const SaveButton: React.FC<ButtonProps> = ({ onClick, label = "Save" }) => (
  <Button
    onClick={onClick}
    sx={{
      width: "78px",
      height: "39px",
      borderRadius: "8px",
      backgroundColor: "var(--deep-pink-red)",
      color: "var(--white)",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "var(--crimson-red)",
      },
    }}
  >
    {label}
  </Button>
);
