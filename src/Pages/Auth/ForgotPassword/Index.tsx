import React from "react";
import Clients from "../../../Assets/AuthImg/Clients.svg";
import Dots from "../../../Assets/AuthImg/Dots.svg";
import FoulPlay from "../../../Assets/AuthImg/FoulPlay.svg";
import Heading from "../../../Assets/AuthImg/Heading.svg";
import Logo from "../../../Assets/AuthImg/Litmus.svg";
import Mail from "../../../Assets/AuthImg/Mail.svg";
import { Box, Typography, Divider, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  EMAIL_PLACEHOLDER,
  FORGOT_PASSWORD,
  HAVE_ACCOUNT,
} from "../../../Constant/signup";
import {
  BRAND_LOGOS,
  Continue,
  COPY_RIGHT,
  DECORATIVE_DOTS,
  EMAIL_ICON,
  FOUL_PLAY_HEADING,
  HEADING,
  LITMUS_LOGO,
  LOGIN_NOW,
} from "../../../Constant/login";
import InputField from "../../../Components/InputField";
import { AuthButton } from "../../../Components/AuthButton";

const ForgotPassword: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "910px",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: { md: "50%", lg: "50%", xl: "50%" },
          height: "100%",
          textAlign: "center",
          px: { md: 3, lg: 4, xl: 6 },
          backgroundColor: "var(--light-gray)",
          py: { md: 4, lg: 6, xl: 8 },
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            component="img"
            src={FoulPlay}
            alt={FOUL_PLAY_HEADING}
            sx={{
              maxWidth: "80%",
              maxHeight: { md: "600px", lg: "750px", xl: "800px" },
            }}
          />
          <Box
            sx={{
              mt: { md: 2, lg: 3, xl: 4 },
              mb: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Heading}
              alt={HEADING}
              sx={{
                maxWidth: "60%",
                height: { md: "66px", lg: "76px", xl: "86px" },
              }}
            />
          </Box>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Box
              component="img"
              src={Dots}
              alt={DECORATIVE_DOTS}
              sx={{
                maxWidth: "100px",
                maxHeight: "20px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: 4, flexWrap: "wrap" }}
        >
          <Box
            component="img"
            src={Clients}
            alt={BRAND_LOGOS}
            sx={{
              maxWidth: { md: "500px", lg: "550px", xl: "600px" },
              maxHeight: { md: "250px", lg: "280px", xl: "300px" },
              objectFit: "contain",
            }}
          />
        </Stack>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: { md: "50%", lg: "50%", xl: "50%" },
          height: "100%",
          px: { md: 2, lg: 3, xl: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          overflowY: "auto",
          pb: 10,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { md: "450px", lg: "500px", xl: "550px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "center", mb: { md: 2, lg: 3, xl: 4 } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt={LITMUS_LOGO}
                sx={{
                  maxWidth: { md: "300px", lg: "320px", xl: "350px" },
                  maxHeight: { md: "350px", lg: "380px", xl: "400px" },
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Readex Pro",
                fontSize: { md: "22px", lg: "24px", xl: "26px" },
                lineHeight: "150%",
                letterSpacing: "-1%",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              {FORGOT_PASSWORD}
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              width: "100%",
              maxWidth: { md: "350px", lg: "380px", xl: "417px" },
            }}
          >
            <Box
              sx={{
                width: { md: "350px", lg: "380px", xl: "417px" },
                height: "56px",
                borderRadius: "8px",
                border: "1px solid var(--light-border-gray)",
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                backgroundColor: "var(--white)",
              }}
            >
              <Box
                component="img"
                src={Mail}
                alt={EMAIL_ICON}
                sx={{ width: 20, height: 20, opacity: 0.4, mr: 1 }}
              />
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: 2,
                  width: "1px",
                  height: "25px",
                  bgcolor: "var(--light-border-gray)",
                  mt: 2,
                }}
              />
              <InputField placeholder={EMAIL_PLACEHOLDER} type="email" />
            </Box>

            <AuthButton type="submit" fullWidth>
              {Continue}
            </AuthButton>
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: { md: "350px", lg: "380px", xl: "417px" },
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Readex Pro",
                fontWeight: 400,
                fontSize: { md: "13px", lg: "14px", xl: "14px" },
                lineHeight: "150%",
                textAlign: "left",
                alignSelf: "flex-start",
                color: "var(--gray)",
              }}
            >
              {HAVE_ACCOUNT}{" "}
              <RouterLink
                to="/login"
                style={{ textDecoration: "none", color: "var(--gray)" }}
              >
                {LOGIN_NOW}
              </RouterLink>
            </Typography>
          </Box>
        </Box>

        {/* Copyright text positioned at the bottom */}
        <Typography
          sx={{
            fontFamily: "Readex Pro",
            fontWeight: 400,
            fontSize: { md: "13px", lg: "14px", xl: "14px" },
            textAlign: "center",
            color: "var(--gray)",
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          {COPY_RIGHT}
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
