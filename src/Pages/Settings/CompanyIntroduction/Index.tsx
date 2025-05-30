import { useState } from "react";
import { Typography } from "@mui/material";
import {
  COMPANY_INTRO_TITLE,
  COMPANY_INTRO_SUBTITLE,
  COMPANY_INTRO_NOTE,
  ADD_BUTTON_TEXT,
  NO_INTRO_TITLE,
  NO_INTRO_MESSAGE,
  ADD_INTRO_INSTRUCTION,
  StyledContainer,
  HeaderContainer,
  AddButton,
  ImageContainer,
} from "../../../Constant/companyDetails";
import { Box } from "@mui/material";
import CompanyIntroForm from "./CompanyIntroductionForm";
import Bell from "../../../Assets/AuthImg/Bell.svg";

const CompanyIntroduction = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <CompanyIntroForm />;
  }

  return (
    <StyledContainer>
      <HeaderContainer>
        <Box sx={{ flex: 1, pr: 2 }}>
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "120%",
              mb: 1,
            }}
          >
            {COMPANY_INTRO_TITLE}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "140%",
              color: "var(--gray-neutral)",
            }}
          >
            {COMPANY_INTRO_SUBTITLE}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "140%",
              color: "var(--gray-neutral)",
              mt: 1,
            }}
          >
            {COMPANY_INTRO_NOTE}
          </Typography>
        </Box>
        <AddButton
          sx={{
            fontSize: "14px",
            ml: 2,
          }}
          onClick={handleAddClick}
        >
          {ADD_BUTTON_TEXT}
        </AddButton>
      </HeaderContainer>

      <ImageContainer>
        <img
          src={Bell}
          alt={NO_INTRO_TITLE}
          style={{
            width: "60%",
            maxWidth: "168px",
            minWidth: "100px",
            height: "auto",
          }}
        />
      </ImageContainer>

      <Box
        textAlign="center"
        sx={{
          mb: 4,
          px: 2,
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Readex Pro",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "120%",
            mb: 1,
          }}
        >
          {NO_INTRO_TITLE}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Readex Pro",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "140%",
            color: "var(--medium-gray)",
          }}
        >
          {NO_INTRO_MESSAGE}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Readex Pro",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "140%",
            color: "var(--medium-gray)",
            mt: 1,
          }}
        >
          {ADD_INTRO_INSTRUCTION}
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default CompanyIntroduction;
