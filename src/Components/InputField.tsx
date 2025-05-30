import React from "react";
import TextField from "@mui/material/TextField";

interface InputFieldProps {
  placeholder?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = "",
  type = "text",
}) => {
  return (
    <TextField
      placeholder={placeholder}
      variant="standard"
      sx={{
        "& .MuiInputBase-root": {
          "&:before, &:after": {
            display: "none",
          },
        },
      }}
      fullWidth
      type={type}
    />
  );
};

export default InputField;
