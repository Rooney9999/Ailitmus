import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import PaymentIcon from "@mui/icons-material/Payment";
import ExploreIcon from "@mui/icons-material/Explore";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import { ROUTES } from './routes';

export interface MenuItem {
  text: string;
  icon: React.ReactElement;
  path?: string;
  children?: MenuItem[];
}

export const sidebarMenuItems: MenuItem[] = [
  { text: "Jobs", icon: React.createElement(WorkIcon), path: ROUTES.JOBS },
  { text: "Billing", icon: React.createElement(PaymentIcon), path: ROUTES.BILLING },
  { text: "Explore", icon: React.createElement(ExploreIcon), path: ROUTES.EXPLORE },
  {
    text: "Settings",
    icon: React.createElement(SettingsIcon),
    path: ROUTES.PROFILE, 
    children: [
      { text: "Profile", icon: React.createElement(PersonIcon), path: ROUTES.PROFILE },
      { text: "User Management", icon: React.createElement(GroupIcon), path: ROUTES.USER_MANAGEMENT },
      { text: "Company Introduction", icon: React.createElement(BusinessIcon), path: ROUTES.COMPANY_INTRODUCTION },
    ],
  },
];

export const LOGO="logo"