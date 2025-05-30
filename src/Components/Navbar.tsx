import React from "react";
import profile from "../Assets/AuthImg/Profile.svg";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  TITLE,
  USER_NAME,
  USER_EMAIL,
  SETTINGS,
  MANAGE_PROFILE,
  LOGOUT,
  WORKSPACES,
  WORKSPACE_NAME,
  WORKSPACE_INITIALS,
  ADD_WORKSPACE,
} from "../Constant/navbar";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "var(--white)",
        boxShadow: "none",
      }}
      elevation={0}
    >
      <Toolbar sx={{ pr: 2 }}>
        <Typography
          sx={{ flexGrow: 1, color: "var(--black)", fontSize: "1.5rem" }}
        >
          {TITLE}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ mr: 1, fontSize: "0.875rem" }}>
            {USER_NAME}
          </Typography>
          <Avatar
            src={profile}
            sx={{ width: 40, height: 40 }}
            onClick={handleMenu}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                width: 300,
                borderRadius: 2,
                padding: 2,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar src={profile} sx={{ width: 48, height: 48, mr: 2 }} />
              <Box>
                <Typography fontWeight="bold" sx={{ fontSize: "1rem" }}>
                  {USER_NAME}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 400,
                    fontsize: "12px",
                  }}
                >
                  {USER_EMAIL}
                </Typography>
              </Box>
            </Box>
            <MenuItem
              onClick={handleClose}
              sx={{ py: 1, color:"var(--gray-neutral)", fontSize: "12px" }}
            >
              {SETTINGS}
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{ py: 1,  color:"var(--gray-neutral)", fontSize: "12px" }}
            >
              {MANAGE_PROFILE}
            </MenuItem>
            <MenuItem
              onClick={handleLogout}
              sx={{ py: 1,  color:"var(--gray-neutral)", fontSize: "12px" }}
            >
              {LOGOUT}
            </MenuItem>
            <Box sx={{ mt: 2, mb: 1 }}>
              <Typography fontWeight="bold" sx={{ fontSize: "0.875rem" }}>
                {WORKSPACES}
              </Typography>
            </Box>
            <MenuItem onClick={handleClose} sx={{ py: 1 }}>
              <Avatar
                sx={{
                  bgcolor: "blue",
                  width: 24,
                  height: 24,
                  mr: 1,
                  fontSize: "0.75rem",
                }}
              >
                {WORKSPACE_INITIALS}
              </Avatar>
              <Typography sx={{ fontSize: "0.875rem" }}>
                {WORKSPACE_NAME}
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ py: 1 }}>
              <Typography
                color="var(--primary-red)"
                sx={{ fontSize: "0.875rem" }}
              >
                {ADD_WORKSPACE}
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
