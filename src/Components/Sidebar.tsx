import React, { useEffect, useState } from "react";
import Logo from "../Assets/AuthImg/Litmus.svg";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { LOGO, sidebarMenuItems } from "../Constant/sidebar";

const drawerWidth = 250;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const isPathActive = (path?: string) => {
    if (!path) return false;
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  useEffect(() => {
    const matchingParent = sidebarMenuItems.find((item) =>
      item.children?.some((child) => isPathActive(child.path))
    );

    if (matchingParent) {
      setOpen({ [matchingParent.text]: true });
    } else {
      setOpen({});
    }
  }, [location.pathname]);

  const drawerContent = (
    <>
      <Box sx={{ p: 2, width: "100%", boxSizing: "border-box" }}>
        <img
          src={Logo}
          alt={LOGO}
          style={{ width: "100%", maxWidth: "100%" }}
        />
      </Box>
      <Divider />
      <List
        sx={{
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {sidebarMenuItems.map((item) => {
          const hasChildren = !!item.children;
          const isChildActive = item.children?.some((child) =>
            isPathActive(child.path)
          );
          const isDirectActive = isPathActive(item.path);
          const isActive = isDirectActive || isChildActive;

          return (
            <React.Fragment key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    if (hasChildren) {
                      setOpen((prev) => ({
                        ...Object.keys(prev).reduce(
                          (acc, key) => ({ ...acc, [key]: false }),
                          {}
                        ),
                        [item.text]: !prev[item.text],
                      }));

                      if (item.path) {
                        navigate(item.path);
                      }
                    } else if (item.path) {
                      setOpen({});
                      navigate(item.path);
                    }
                  }}
                  sx={{
                    backgroundColor: isActive
                      ? "var(--primary-red)"
                      : "transparent",
                    color: isActive ? "var(--white)" : "var(--black)",
                    borderRadius: "20px",
                    mx: 2,
                    my: 1,
                    width: `calc(100% - 32px)`,
                    boxSizing: "border-box",
                    "&:hover": {
                      backgroundColor: isActive
                        ? "var(--primary-red)"
                        : "var(--very-light-gray)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ color: isActive ? "var(--white)" : "var(--black)" }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontFamily: "Readex Pro",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "169%",
                          color: isActive ? "var(--white)" : "var(--black)",
                        }}
                      >
                        {item.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>

              {hasChildren && open[item.text] && (
                <List
                  component="div"
                  disablePadding
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: "51px",
                      top: "-8px",
                      bottom: "8px",
                      width: "2px",
                      backgroundColor: isChildActive
                        ? "var(--primary-red)"
                        : "var(--gray-medium)",
                    },
                  }}
                >
                  {item.children?.map((child) => {
                    const isChildItemActive = isPathActive(child.path);

                    return (
                      <ListItem key={child.text} disablePadding sx={{ pl: 4 }}>
                        <ListItemButton
                          onClick={() => {
                            navigate(child.path!);
                          }}
                          sx={{
                            backgroundColor: "transparent",
                            color: isChildItemActive
                              ? "var(--primary-red)"
                              : "var(--gray-medium)",
                            pl: "16px",
                            mx: 2,
                            my: 0.5,
                            width: `calc(100% - 32px)`,
                            boxSizing: "border-box",
                            "&:hover": {
                              backgroundColor: "transparent",
                            },
                            position: "relative",
                            "&::before": {
                              content: '"•"',
                              position: "absolute",
                              left: "1px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: isChildItemActive
                                ? "var(--primary-red)"
                                : "var(--gray-medium)",
                              fontSize: "20px",
                              lineHeight: "1",
                            },
                          }}
                        >
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  fontFamily: "Readex Pro",
                                  fontWeight: 300,
                                  fontSize: "10px",
                                  lineHeight: "169%",
                                  color: isChildItemActive
                                    ? "var(--primary-red)"
                                    : "var(--gray-medium)",
                                }}
                              >
                                {child.text}
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </React.Fragment>
          );
        })}
      </List>
    </>
  );

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "var(--white)",
          overflowX: "hidden",
          borderRight: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
