import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Avatar,
  Link,
  IconButton,
} from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatAlignLeft,
  FormatListBulleted,
  FormatListNumbered,
} from "@mui/icons-material";
import {
  INTRODUCE_COMPANY,
  PROVIDE_INTRO,
  NAME_LABEL,
  REQUIRED_INDICATOR,
  NAME_PLACEHOLDER,
  LOGO_LABEL,
  VIDEO_INTRO_LABEL,
  CHOOSE_FILE,
  UPLOAD_TEXT,
  DEFAULT_CHECKBOX,
  ABOUT_LABEL,
  ABOUT_PLACEHOLDER,
  READ_MORE,
  READ_LESS,
  REQUIRED_FIELDS_ALERT,
  LOGO_ALT,
  UploadBox,
} from "../../../Constant/companyDetails";
import { CancelButton, SaveButton } from "../../../Components/ActionButtons";

const CompanyIntroductionForm: React.FC = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [isDefault, setIsDefault] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAboutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAbout(event.target.value);
  };

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setLogo(file);
  };

  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDefault(event.target.checked);
  };

  const handleCancel = () => {
    if (!isSaved) {
      setName("");
      setAbout("");
      setLogo(null);
      setIsDefault(false);
    }
    setShowFullText(false);
  };

  const handleSave = () => {
    if (!name || !about || !logo) {
      alert(REQUIRED_FIELDS_ALERT);
      return;
    }
    setIsSaved(true);
    setShowFullText(false);
  };

  const getTruncatedText = (text: string, wordLimit: number) => {
    const words = text.split(/\s+/);
    if (words.length <= wordLimit) return { text, needsReadMore: false };
    return {
      text: words.slice(0, wordLimit).join(" ") + "...",
      needsReadMore: true,
    };
  };

  const { text: truncatedAbout, needsReadMore } = isSaved
    ? getTruncatedText(about, 200)
    : { text: about, needsReadMore: false };

  return (
    <Box
      sx={{
        backgroundColor: "var(--white)",
        borderRadius: "15px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "90%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "auto",
        padding: 4,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Readex Pro",
          fontWeight: 600,
          fontSize: "18px",
          color: "var(--black)",
        }}
      >
        {INTRODUCE_COMPANY}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Readex Pro",
          fontWeight: 400,
          fontSize: "12px",
          color: "var(--gray-neutral)",
          lineHeight: "150%",
        }}
      >
        {PROVIDE_INTRO}
      </Typography>

      <Paper
        sx={{
          padding: 3,
          marginTop: 2,
          border: "none",
          elevation: 0,
          ...(isSaved && { backgroundColor: "var(--off-white)" }),
        }}
      >
        {isSaved ? (
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            {logo && (
              <Avatar
                src={URL.createObjectURL(logo)}
                alt={LOGO_ALT}
                sx={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  border: "4px solid var(--gray-neutral)",
                  backgroundColor: "var(--white)",
                }}
              />
            )}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "100%",
                    color: "var(--black)",
                  }}
                >
                  {name}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Readex Pro",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "160%",
                  color: "var(--gray-neutral)",
                  marginTop: 1,
                }}
              >
                {showFullText ? about : truncatedAbout}
              </Typography>
              {needsReadMore && (
                <Link
                  href="#"
                  sx={{
                    marginTop: 1,
                    display: "block",
                    textTransform: "uppercase",
                    color: "var(--danger-red)",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowFullText(!showFullText);
                  }}
                >
                  {showFullText ? READ_LESS : READ_MORE}
                </Link>
              )}
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "var(--gray-neutral)",
                    lineHeight: "150%",
                  }}
                >
                  {NAME_LABEL}{" "}
                  <span style={{ color: "var(--deep-red)" }}>
                    {REQUIRED_INDICATOR}
                  </span>
                </Typography>
                <TextField
                  placeholder={NAME_PLACEHOLDER}
                  value={name}
                  onChange={handleNameChange}
                  sx={{
                    width: "100%",
                    height: "40.96px",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "40.96px",
                      borderRadius: "8px",
                      "& fieldset": {
                        borderWidth: "1px",
                        borderColor: "var(--soft-gray)",
                      },
                      "& input::placeholder": {
                        fontFamily: "Readex Pro",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "150%",
                      },
                    },
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "var(--gray-neutral)",
                    lineHeight: "150%",
                    marginTop: 4,
                  }}
                >
                  {LOGO_LABEL}{" "}
                  <span style={{ color: "var(--deep-red)" }}>
                    {REQUIRED_INDICATOR}
                  </span>
                </Typography>
                <UploadBox>
                  <Button
                    component="label"
                    sx={{
                      width: "140px",
                      height: "38px",
                      borderRadius: "30px",
                      border: "1px solid var(--primary-red)",
                      color: "var(--primary-red)",
                      backgroundColor: "transparent",
                      textTransform: "none",
                      fontWeight: 500,
                      fontFamily: "Readex Pro",
                      "&:hover": {
                        backgroundColor: "var(--blush-pink)",
                        borderColor: "var(--primary-red)",
                      },
                    }}
                  >
                    {CHOOSE_FILE}
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleLogoChange}
                    />
                  </Button>
                  <Typography
                    sx={{
                      fontFamily: "Readex Pro",
                      fontWeight: 400,
                      fontSize: "12px",
                      color: "var(--gray-neutral)",
                      lineHeight: "150%",
                      marginTop: 1,
                    }}
                  >
                    {UPLOAD_TEXT}
                  </Typography>
                </UploadBox>

                <Typography
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "var(--gray-neutral)",
                    lineHeight: "150%",
                    marginTop: 4,
                  }}
                >
                  {VIDEO_INTRO_LABEL}
                </Typography>
                <UploadBox>
                  <Button
                    sx={{
                      width: "140px",
                      height: "38px",
                      borderRadius: "30px",
                      border: "1px solid var(--primary-red)",
                      color: "var(--primary-red)",
                      backgroundColor: "transparent",
                      textTransform: "none",
                      fontWeight: 500,
                      fontFamily: "Readex Pro",
                      "&:hover": {
                        backgroundColor: "var(--blush-pink)",
                        borderColor: "var(--primary-red)",
                      },
                    }}
                  >
                    {CHOOSE_FILE}
                  </Button>
                  <Typography
                    sx={{
                      fontFamily: "Readex Pro",
                      fontWeight: 400,
                      fontSize: "12px",
                      color: "var(--gray-neutral)",
                      lineHeight: "150%",
                      marginTop: 1,
                    }}
                  >
                    {UPLOAD_TEXT}
                  </Typography>
                </UploadBox>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isDefault}
                      onChange={handleDefaultChange}
                      sx={{
                        "&.Mui-checked": {
                          color: "var(--primary-red)",
                        },
                        "& svg": {
                          width: "12px",
                          height: "12px",
                        },
                      }}
                    />
                  }
                  label={DEFAULT_CHECKBOX}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: "Readex Pro",
                      fontWeight: 400,
                      fontSize: "12px",
                      color: "var(--gray-neutral)",
                    },
                  }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "var(--gray-neutral)",
                    lineHeight: "150%",
                  }}
                >
                  {ABOUT_LABEL}{" "}
                  <span style={{ color: "var(--deep-red)" }}>
                    {REQUIRED_INDICATOR}
                  </span>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    padding: "4px",
                    border: "1px solid var(--soft-gray)",
                    borderBottom: "none",
                    borderRadius: "4px 4px 0 0",
                  }}
                >
                  <IconButton>
                    <FormatBold sx={{ width: 15, height: 15 }} />
                  </IconButton>
                  <IconButton>
                    <FormatItalic sx={{ width: 15, height: 15 }} />
                  </IconButton>
                  <IconButton>
                    <FormatUnderlined sx={{ width: 15, height: 15 }} />
                  </IconButton>

                  <IconButton>
                    <FormatAlignLeft sx={{ width: 15, height: 15 }} />
                  </IconButton>

                  <IconButton>
                    <FormatListBulleted sx={{ width: 15, height: 15 }} />
                  </IconButton>
                  <IconButton>
                    <FormatListNumbered sx={{ width: 15, height: 15 }} />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    width: "90%",
                    borderTop: "1px solid var(--soft-gray)",
                    mt: "2px",
                    ml: 3,
                    mr: 3,
                  }}
                />
                <TextField
                  fullWidth
                  placeholder={ABOUT_PLACEHOLDER}
                  multiline
                  rows={10}
                  value={about}
                  onChange={handleAboutChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0 0 4px 4px",
                      "& fieldset": {
                        borderWidth: "1px",
                        borderColor: "var(--soft-gray)",
                        borderTop: "none",
                      },
                      "& textarea::placeholder": {
                        fontFamily: "Readex Pro",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "150%",
                        color: "var(--gray-neutral)",
                      },
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                justifyContent: "flex-start",
                gap: 2,
              }}
            >
              <CancelButton onClick={handleCancel}></CancelButton>
              <SaveButton onClick={handleSave}></SaveButton>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CompanyIntroductionForm;
