import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Chip,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
} from "@mui/material";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  users,
  FILTERS_LABEL,
  RESET_FILTERS_TEXT,
  TABLE_HEADER_NAME,
  TABLE_HEADER_EMAIL,
  TABLE_HEADER_ROLE,
  TABLE_HEADER_STATUS,
  TABLE_HEADER_INVITED_AT,
  ROLE_OWNER,
  ROLE_MEMBER,
  STATUS_ACTIVE,
  STATUS_REMOVED,
  OWNER_TOOLTIP,
  MEMBER_TOOLTIP,
} from "../../../../Constant/userManagement";
import styles from "./Users.module.scss";
import type { User } from "../../../../Constant/userManagement";

const UsersDetails: React.FC = () => {
  return (
    <>
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
            label={`Status: Active`}
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

          <Chip
            label={`Role: Member`}
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
            onClick={() => {}}
          >
            {RESET_FILTERS_TEXT}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: "Readex Pro",
          fontWeight: 300,
          fontSize: "12px",
          lineHeight: "100%",
          marginBottom: 2,
          color: "var(--gray)",
        }}
      >
        {`Showing ${users.length} of the ${users.length}`}
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1px",
                    }}
                  >
                    <span>{header}</span>
                    <UnfoldMoreOutlinedIcon
                      sx={{ fontSize: 18, color: "var(--gray)" }}
                    />
                  </Box>
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: User, index: number) => (
              <TableRow key={index}>
                <TableCell className={styles.tableCell}>
                  {user.fullName}
                </TableCell>
                <TableCell className={styles.tableCell}>{user.email}</TableCell>
                <TableCell className={styles.tableCell}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <span>{user.role}</span>
                    {(user.role === ROLE_OWNER || user.role === ROLE_MEMBER) &&
                      !(user.role === ROLE_OWNER && index === 1) && (
                        <Tooltip
                          title={
                            user.role === ROLE_OWNER
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
                    {user.workspace && (
                      <Typography className={styles.tableCell}>
                        ({user.workspace})
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
                          user.status === STATUS_ACTIVE
                            ? "success.main"
                            : user.status === STATUS_REMOVED
                            ? "error.main"
                            : "warning.main",
                      }}
                    />
                    <Chip
                      className={styles.tableCell}
                      sx={{
                        backgroundColor: "transparent",
                        color:
                          user.status === STATUS_ACTIVE
                            ? "success.main"
                            : user.status === STATUS_REMOVED
                            ? "error.main"
                            : "warning.main",
                      }}
                      label={user.status}
                      size="small"
                    />
                  </Box>
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {user.joinedAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersDetails;
