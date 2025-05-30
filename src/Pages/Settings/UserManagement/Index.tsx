import React, { useState } from "react";
import { Box, Tabs, Tab, TextField, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  INVITATIONS,
  SEARCH_BY_EMAIL,
  TABLE_HEADER_ROLE,
  TABLE_HEADER_STATUS,
  USERS,
} from "../../../Constant/userManagement";
import FilterButton from "../../../Components/FilterButton";
import UsersDetails from "./Users/Index";
import InvitationDetails from "./Invitation/Index";

const UserManagement: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [anchorElStatus, setAnchorElStatus] = useState<null | HTMLElement>(
    null
  );
  const [anchorElRole, setAnchorElRole] = useState<null | HTMLElement>(null);

  const handleTabChange = (_event: unknown, newValue: number) => {
    setTabValue(newValue);
  };

  const handleStatusClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElStatus(event.currentTarget);
  };

  const handleRoleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRole(event.currentTarget);
  };

  const handleStatusClose = () => {
    setAnchorElStatus(null);
  };

  const handleRoleClose = () => {
    setAnchorElRole(null);
  };

  const handleStatusSelect = () => {
    handleStatusClose();
  };

  const handleRoleSelect = () => {
    handleRoleClose();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "var(--off-white)", height: "90vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            width: "254px",
            height: "50px",
            "& .MuiTabs-flexContainer": {
              borderRadius: "8px",
              backgroundColor: "var(--light-gray)",
              width: "100%",
              height: "100%",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            label={USERS}
            sx={{
              width: "127px",
              height: "50px",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "bold",
              color: tabValue === 0 ? "var(--pink)" : "var(--gray)",
              backgroundColor:
                tabValue === 0 ? "var(--lavender-blush)" : "transparent",
              "&:hover": {
                backgroundColor:
                  tabValue === 0
                    ? "var(--lavender-blush)"
                    : "var(--light-gray)",
              },
              "&.Mui-selected": {
                color: "var(--pink)",
                backgroundColor: "var(--lavender-blush)",
              },
            }}
          />
          <Tab
            label={INVITATIONS}
            sx={{
              width: "127px",
              height: "50px",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "bold",
              color: tabValue === 1 ? "var(--pink)" : "var(--gray)",
              backgroundColor:
                tabValue === 1 ? "var(--lavender-blush)" : "transparent",
              "&:hover": {
                backgroundColor:
                  tabValue === 1
                    ? "var(--lavender-blush)"
                    : "var( --light-gray)",
              },
              "&.Mui-selected": {
                color: "var(--pink)",
                backgroundColor: "var(--lavender-blush)",
              },
            }}
          />
        </Tabs>

        {/* Search and Filter Controls */}
        {tabValue === 0 && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              placeholder={SEARCH_BY_EMAIL}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <SearchIcon
                      sx={{
                        mr: 1,
                        color: "var(--gray)",
                        width: "14px",
                        height: "14px",
                      }}
                    />
                  ),
                },
              }}
              sx={{
                width: "339px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  backgroundColor: "var(--white)",
                  height: "44px",
                  "& fieldset": {
                    borderColor: "var(--gray)",
                  },
                  "&:hover fieldset": {
                    borderColor: "var(--gray)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--gray)",
                  },
                  "& input": {
                    padding: "0 14px",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  fontFamily: "Readex Pro",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: "100%",
                  color: "var(--gray)",
                },
              }}
            />

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FilterButton
                onClick={handleStatusClick}
                label={TABLE_HEADER_STATUS}
              ></FilterButton>

              <Menu
                anchorEl={anchorElStatus}
                open={Boolean(anchorElStatus)}
                onClose={handleStatusClose}
                PaperProps={{
                  sx: {
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {["All", "Active", "In Active", "Removed"].map((status) => (
                  <MenuItem
                    key={status}
                    onClick={() => handleStatusSelect()}
                    sx={{
                      fontFamily: "Readex Pro",
                      fontWeight: 300,
                      fontSize: "12px",
                      lineHeight: "145%",
                      color: "var(--gray)",
                    }}
                  >
                    {status}
                  </MenuItem>
                ))}
              </Menu>

              <FilterButton
                onClick={handleRoleClick}
                label={TABLE_HEADER_ROLE}
              ></FilterButton>

              <Menu
                anchorEl={anchorElRole}
                open={Boolean(anchorElRole)}
                onClose={handleRoleClose}
                PaperProps={{
                  sx: {
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {["All", "Admin", "Member", "Owner"].map((role) => (
                  <MenuItem
                    key={role}
                    onClick={() => handleRoleSelect()}
                    sx={{
                      fontFamily: "Readex Pro",
                      fontWeight: 300,
                      fontSize: "12px",
                      lineHeight: "145%",
                      color: "var(--gray)",
                    }}
                  >
                    {role}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        )}
      </Box>

      {tabValue === 0 ? <UsersDetails /> : <InvitationDetails />}
    </Box>
  );
};

export default UserManagement;
