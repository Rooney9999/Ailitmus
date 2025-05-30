import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  TextField,
  Button,
  Chip,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  Select,
  Card,
  CardContent,
  Tooltip,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { invitations } from "../../../../Constant/userManagement"; 
import type { Invitation } from "../../../../Constant/userManagement"; 
import {
  INVITE_USERS_TITLE,
  INVITE_USERS_SUBTITLE,
  INVITE_EMAIL_PLACEHOLDER,
  INVITE_BUTTON_TEXT,
  ROLES_DESCRIPTION_TITLE,
  ADMIN_TITLE,
  ADMIN_DESCRIPTION,
  MEMBER_TITLE,
  MEMBER_DESCRIPTION,
  FILTERS_LABEL,
  RESET_FILTERS_TEXT,
  SEARCH_PLACEHOLDER,
  ROLE_FILTER_BUTTON,
  SHOWING_RESULTS_TEXT,
  TABLE_HEADER_NAME,
  TABLE_HEADER_EMAIL,
  TABLE_HEADER_ROLE,
  TABLE_HEADER_STATUS,
  TABLE_HEADER_INVITED_AT,
  STATUS_ACCEPTED,
  STATUS_EXPIRED,
  ROLE_ADMIN,
  ROLE_MEMBER,
  ROLE_OWNER,
  OWNER_TOOLTIP,
  MEMBER_TOOLTIP,
} from "../../../../Constant/userManagement";
import MemberImage from "../../../../Assets/AuthImg/Member.svg";
import AdminImage from "../../../../Assets/AuthImg/Admin.svg";
import FilterButton from "../../../../Components/FilterButton";
import styles from "./Invitation.module.scss";

const InvitationDetails: React.FC = () => {
  const [inviteEmails, setInviteEmails] = useState<string>("");
  const [inviteRole, setInviteRole] = useState<string>(ROLE_MEMBER);
  const [anchorElRole, setAnchorElRole] = useState<null | HTMLElement>(null);

  const handleInvite = () => {
    setInviteEmails("");
  };

  const handleRoleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRole(event.currentTarget);
  };

  const handleRoleClose = () => {
    setAnchorElRole(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
          backgroundColor: "var(--white)",
          px: 2,
          py: 3,
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "100%",
            }}
          >
            {INVITE_USERS_TITLE}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "100%",
              color: "var(--gray)",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            {INVITE_USERS_SUBTITLE}
          </Typography>

          <TextField
            fullWidth
            placeholder={INVITE_EMAIL_PLACEHOLDER}
            value={inviteEmails}
            onChange={(e) => setInviteEmails(e.target.value)}
            sx={{
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "Readex Pro",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "100%",
              },
              "& .MuiInputBase-input": {
                fontFamily: "Readex Pro",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "100%",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value as string)}
                    variant="standard"
                    disableUnderline
                    sx={{
                      width: "82px",
                      height: "28px",
                      borderRadius: "5px",
                      backgroundColor: "var(--extra-light-gray)",
                      ml: 1,
                      fontFamily: "Readex Pro",
                      fontWeight: 400,
                      fontSize: "10px",
                      "& .MuiSelect-select": {
                        paddingTop: "4px",
                        paddingBottom: "4px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "10px",
                      },
                    }}
                  >
                    <MenuItem
                      sx={{
                        fontFamily: "Readex Pro",
                        fontWeight: 300,
                        fontSize: "12px",
                        lineHeight: "100%",
                      }}
                      value={ROLE_ADMIN}
                    >
                      {ROLE_ADMIN}
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontFamily: "Readex Pro",
                        fontWeight: 300,
                        fontSize: "12px",
                        lineHeight: "100%",
                      }}
                      value={ROLE_MEMBER}
                    >
                      {ROLE_MEMBER}
                    </MenuItem>
                  </Select>
                </InputAdornment>
              ),
            }}
          />

          <Button
            onClick={handleInvite}
            sx={{
              width: "83px",
              height: "38px",
              borderRadius: "8px",
              color: "var(--white)",
              backgroundColor: "var(--primary-red)",
              fontFamily: "Readex Pro",
              fontWeight: 700,
              fontSize: "10px",
              lineHeight: "150%",
              textTransform: "none",
              marginTop: 2,
            }}
          >
            {INVITE_BUTTON_TEXT}
          </Button>
        </Box>

        <Box sx={{ width: "40%" }}>
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              mb: 1,
              color: "var(--gray)",
            }}
          >
            {ROLES_DESCRIPTION_TITLE}
          </Typography>

          <Card
            sx={{
              mb: 1,
              bgcolor: "var(--light-sky-blue)",
              width: 478,
              height: 70,
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <img
                  src={AdminImage}
                  alt={ADMIN_TITLE}
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "100%",
                    color: "var(--sky-blue)",
                  }}
                >
                  {ADMIN_TITLE}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Readex Pro",
                  fontWeight: 300,
                  fontSize: "12px",
                  lineHeight: "150%",
                  color: "var(--sky-blue)",
                }}
              >
                {ADMIN_DESCRIPTION}
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              bgcolor: "var(--light-sky-blue)",
              width: 478,
              height: 70,
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <img
                  src={MemberImage}
                  alt={MEMBER_TITLE}
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "100%",
                    color: "var(--sky-blue)",
                  }}
                >
                  {MEMBER_TITLE}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Readex Pro",
                  fontWeight: 300,
                  fontSize: "12px",
                  lineHeight: "150%",
                  color: "var(--sky-blue)",
                }}
              >
                {MEMBER_DESCRIPTION}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              marginRight: 8,
              color: "var(--gray)",
            }}
          >
            {FILTERS_LABEL}
          </Typography>
          <Chip
            label={`Role: ${ROLE_MEMBER}`}
            onDelete={() => {}}
            deleteIcon={
              <CloseIcon
                sx={{
                  color: "var(--gray-neutral)",
                  height: "18px",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
            }
            sx={{
              borderRadius: "4px",
              color: "var(--gray-neutral)",
            }}
          />
          <Typography
            sx={{
              cursor: "pointer",
              color: "var(--sky-blue)",
              fontFamily: "Readex Pro",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "100%",
            }}
          >
            {RESET_FILTERS_TEXT}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            placeholder={SEARCH_PLACEHOLDER}
            InputProps={{
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
              sx: {
                height: "44px",
                borderRadius: "8px",
                backgroundColor: "var(--off-white)",
                "& fieldset": {
                  borderColor: "var(--gray)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--gray)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--gray)",
                },
                "& input::placeholder": {
                  fontFamily: "Readex Pro",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: "100%",
                  color: "var(--gray)",
                },
              },
            }}
            sx={{
              width: "339px",
            }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FilterButton
              onClick={handleRoleClick}
              label={ROLE_FILTER_BUTTON}
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
              {[ROLE_ADMIN, ROLE_MEMBER].map((role) => (
                <MenuItem
                  key={role}
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "100%",
                  }}
                >
                  {role}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: "Readex Pro",
          fontWeight: 300,
          fontSize: "12px",
          lineHeight: "100%",
          mb: 1,
          color: "var(--gray)",
        }}
      >
        {SHOWING_RESULTS_TEXT.replace(
          "{count}",
          invitations.length.toString()
        ).replace("{total}", invitations.length.toString())}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {[
                TABLE_HEADER_NAME,
                TABLE_HEADER_EMAIL,
                TABLE_HEADER_ROLE,
                TABLE_HEADER_STATUS,
                TABLE_HEADER_INVITED_AT,
                "",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontFamily: "Readex Pro",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "var(--gray)",
                  }}
                >
                  {header !== "" ? (
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "1px" }}
                    >
                      <span>{header}</span>
                      {header !== "" && (
                        <UnfoldMoreOutlinedIcon
                          sx={{ fontSize: 18, color: "var(--gray)" }}
                        />
                      )}
                    </Box>
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {invitations.map((invitation: Invitation, index: number) => (
              <TableRow key={index}>
                <TableCell className={styles.tableCell}>
                  {invitation.fullName}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {invitation.email}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <span>{invitation.role}</span>
                    {(invitation.role === ROLE_OWNER ||
                      invitation.role === ROLE_MEMBER) && (
                      <Tooltip
                        title={
                          invitation.role === ROLE_OWNER
                            ? OWNER_TOOLTIP
                            : MEMBER_TOOLTIP
                        }
                        placement="top"
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: 16,
                            color: "var(--gray)",
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    )}
                    {invitation.workspace && (
                      <Typography className={styles.tableCell}>
                        ({invitation.workspace})
                      </Typography>
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor:
                          invitation.status === STATUS_ACCEPTED
                            ? "success.main"
                            : invitation.status === STATUS_EXPIRED
                            ? "error.main"
                            : "warning.main",
                      }}
                    />
                    <Chip
                      className={styles.tableCell}
                      sx={{
                        backgroundColor: "transparent",
                        color:
                          invitation.status === STATUS_ACCEPTED
                            ? "success.main"
                            : invitation.status === STATUS_EXPIRED
                            ? "error.main"
                            : "warning.main",
                      }}
                      label={invitation.status}
                      size="small"
                    />
                  </Box>
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {invitation.invitedAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default InvitationDetails;
