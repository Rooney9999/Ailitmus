import React from "react";
import Google from "../../../Assets/AuthImg/Google.svg";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import Clients from "../../../Assets/AuthImg/Clients.svg";
import FoulPlay from "../../../Assets/AuthImg/FoulPlay.svg";
import Heading from "../../../Assets/AuthImg/Heading.svg";
import Dots from "../../../Assets/AuthImg/Dots.svg";
import Logo from "../../../Assets/AuthImg/Litmus.svg";
import Mail from "../../../Assets/AuthImg/Mail.svg";
import Eye from "../../../Assets/AuthImg/Eye.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink } from "react-router-dom";
import {
  HEADING_FORM,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
  BUTTON_GOOGLE,
  BUTTON_LINKEDIN,
  BUTTON_LOGIN,
  BUTTON_CREATE_ACCOUNT,
  LINK_TERMS,
  LINK_PRIVACY,
  LABEL_REMEMBER_ME,
  TEXT_OR_CONTINUE,
  TEXT_NO_ACCOUNT,
  COPY_RIGHT,
  TEXT_AGREEMENT,
  PASSWORD,
  FOUL_PLAY_HEADING,
  HEADING,
  DECORATIVE_DOTS,
  BRAND_LOGOS,
  LITMUS_LOGO,
  EMAIL_ICON,
  PASSWORD_ICON,
  GOOGLE_LOGO,
  GoogleLogo,
} from "../../../Constant/login";
import { FORGOT_PASSWORD } from "../../../Constant/signup";
import { SocialButton } from "../../../Components/SocialButton";
import InputField from "../../../Components/InputField";
import { AuthButton } from "../../../Components/AuthButton";


const Login: React.FC = () => {

 const handleLogin = () => {};


  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "910px",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
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
              {HEADING_FORM}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 2,
              flexWrap: "wrap",
            }}
          >
            <SocialButton
              startIcon={<GoogleLogo src={Google} alt={GOOGLE_LOGO} />}
              sx={{
                width: { md: "190px", lg: "200px", xl: "204px" },
                height: "42px",
                borderRadius: "8px",
                border: "1px solid var(--light-border-gray)",
                textTransform: "none",
              }}
              onClick={() => {}}
            >
              {BUTTON_GOOGLE}
            </SocialButton>

            <SocialButton
              startIcon={<LinkedInIcon sx={{ color: "var(--blue-link)" }} />}
              sx={{
                width: { md: "190px", lg: "200px", xl: "204px" },
                height: "42px",
                borderRadius: "8px",
                textTransform: "none",
              }}
              onClick={() => {}}
            >
              {BUTTON_LINKEDIN}
            </SocialButton>
          </Box>

          <Divider
            sx={{
              width: { md: "350px", lg: "380px", xl: "417px" },
              my: 2,
              "&::before, &::after": {
                borderColor: "var(--light-border-gray)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: { md: "14px", lg: "15px", xl: "16px" },
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "var(--gray-darker)",
              }}
            >
              {TEXT_OR_CONTINUE}
            </Typography>
          </Divider>

          <Box
            component="form"
            onSubmit={handleLogin}
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
              <InputField
                placeholder={PLACEHOLDER_EMAIL} type="email"
              
              />
            </Box>

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
                src={Eye}
                alt={PASSWORD_ICON}
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
              <InputField
                placeholder={PLACEHOLDER_PASSWORD}
                type={PASSWORD}
           
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontFamily: "Readex Pro",
                      fontWeight: 400,
                      fontSize: { md: "13px", lg: "14px", xl: "14px" },
                      lineHeight: "150%",
                      textAlign: "center",
                      color: "var(--gray)",
                    }}
                  >
                    {LABEL_REMEMBER_ME}
                  </Typography>
                }
              />
              <Typography
                sx={{
                  fontFamily: "Readex Pro",
                  fontWeight: 400,
                  fontSize: { md: "13px", lg: "14px", xl: "14px" },
                  lineHeight: "150%",
                  textAlign: "center",
                }}
              >
                <RouterLink
                  to="/forgot-password"
                  style={{ textDecoration: "none", color: "var(--gray)" }}
                >
                  {FORGOT_PASSWORD}
                </RouterLink>
              </Typography>
            </Box>

            <AuthButton type="submit" fullWidth>
              {BUTTON_LOGIN}
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
              {TEXT_NO_ACCOUNT}{" "}
              <RouterLink
                to="/signup"
                style={{ textDecoration: "none", color: "var(--gray)" }}
              >
                {BUTTON_CREATE_ACCOUNT}
              </RouterLink>
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
                mt: 8,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Readex Pro",
                  fontWeight: 400,
                  fontSize: { md: "13px", lg: "14px", xl: "14px" },
                  lineHeight: "150%",
                  textAlign: "center",
                  color: "var(--gray-silver)",
                }}
              >
                {TEXT_AGREEMENT}{" "}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Readex Pro",
                  fontWeight: 400,
                  fontSize: { md: "13px", lg: "14px", xl: "14px" },
                  lineHeight: "150%",
                  textAlign: "center",
                }}
              >
                <RouterLink
                  to="/terms"
                  style={{
                    textDecoration: "none",
                    color: "var(--gray-dark-medium)",
                  }}
                >
                  {LINK_TERMS}
                </RouterLink>
                <span style={{ color: "var(--gray-silver)" }}> and </span>
                <RouterLink
                  to="/privacy"
                  style={{
                    textDecoration: "none",
                    color: "var(--gray-dark-medium)",
                  }}
                >
                  {LINK_PRIVACY}
                </RouterLink>
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Readex Pro",
                  fontWeight: 400,
                  fontSize: { md: "13px", lg: "14px", xl: "14px" },
                  textAlign: "center",
                  mt: 14,
                  color: "var(--gray)",
                }}
              >
                {COPY_RIGHT}{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
