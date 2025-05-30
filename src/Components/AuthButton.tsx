import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import type { Theme } from "@mui/material/styles"; 

export const AuthButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  width: "440px",
  height: "57px",
  backgroundColor: "var(--primary-red)",
  borderRadius: "8px",
  color: "var(--white)",
  textTransform: "none",
  padding: theme.spacing(1.5),
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "var(--deep-red)",
  },
}));
