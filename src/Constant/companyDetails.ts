import { Box, Button } from "@mui/material";
import type { Theme } from "@mui/material/styles"; 
import { styled } from "@mui/material/styles";

export const COMPANY_INTRO_TITLE = "Company Introduction(s)";
export const COMPANY_INTRO_SUBTITLE =
  "This section is crafted to give candidates a closer look at who you are.";
export const COMPANY_INTRO_NOTE =
  "You may have more than one introduction prepared. The job can only be associated with one introduction.";
export const ADD_BUTTON_TEXT = "Add New";
export const NO_INTRO_TITLE = "No Company Introduction";
export const NO_INTRO_MESSAGE =
  "This space will show a list of your company introductions.";
export const ADD_INTRO_INSTRUCTION =
  'Click "Add new" link on the top right corner to create a new company intro.';


export const StyledContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "var(--white)",
  borderRadius: "15px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "90%",
  minHeight: "445px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "auto",
}));

export const HeaderContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "16px",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

export const ImageContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const AddButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  color: "var(--danger-red)",
  textTransform: "none",
  fontFamily: "Readex Pro",
  fontWeight: 600,
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    alignSelf: "flex-start",
    marginLeft: 0,
  },
}));

export const UploadBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  border: "2px dashed #c9c9c9",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  textAlign: "center",
  marginBottom: theme.spacing(1),
}));


export const INTRODUCE_COMPANY = "Introduce Company";
export const PROVIDE_INTRO = "Provide company introduction to candidates";
export const NAME_LABEL = "Name";
export const REQUIRED_INDICATOR = "*";
export const NAME_PLACEHOLDER = 'Enter a name e.g. "Riverville Company"';
export const LOGO_LABEL = "Logo";
export const VIDEO_INTRO_LABEL = "Video Introduction (Optional)";
export const CHOOSE_FILE = "Choose a file";
export const UPLOAD_TEXT = "Drag & drop to upload or browse to choose a file";
export const DEFAULT_CHECKBOX = "Make this the default";
export const ABOUT_LABEL = "About Us";
export const ABOUT_PLACEHOLDER = "Enter Introduction";
export const CANCEL_BUTTON = "Cancel";
export const SAVE_BUTTON = "Save";
export const READ_MORE = "Read More";
export const READ_LESS = "Read Less";
export const REQUIRED_FIELDS_ALERT = "Please fill in all required fields (Name, About, and Logo).";
export const LOGO_ALT = "Company Logo";