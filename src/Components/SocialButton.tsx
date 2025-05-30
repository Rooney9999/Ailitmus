import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import type { Theme } from "@mui/material/styles"; 
export const SocialButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  borderRadius: "4px",
  border: " 1px solid var(--black)",
  textTransform: "none",
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  borderColor: theme.palette.grey[400],
  color: theme.palette.text.primary,
  "&:hover": {
    borderColor: theme.palette.grey[600],
  },
}));