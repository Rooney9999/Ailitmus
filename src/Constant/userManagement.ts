export interface User {
  fullName: string;
  email: string;
  role: string;
  status: string;
  joinedAt: string;
  workspace?: string;
}

export interface Invitation {
  fullName: string;
  email: string;
  role: string;
  status: string;
  invitedAt: string;
  workspace?: string;
}
export const invitations: Invitation[] = [
  {
    fullName: "Albert Thomas",
    email: "albert.thomas@greatlakes.co.in",
    role: "Owner",
    status: "Pending",
    invitedAt: "Fri 23 Aug 2024 10:55 AM",
  },
  {
    fullName: "Shalu Dua",
    email: "shalu.dua@greatlakes.co.in",
    role: "Member",
    status: "Pending",
    invitedAt: "Fri 23 Aug 2024 10:55 AM",
  },
];

export const users: User[] = [
  {
    fullName: "Shalu Dua",
    email: "shalu.dua@greatlakes.co.in",
    role: "Owner",
    status: "Active",
    joinedAt: "Fri 23 Aug 2024 10:55 AM",
  },
  {
    fullName: "Albert Thomas",
    email: "albert.thomas@greatlakes.co.in",
    role: "Owner",
    status: "In Active",
    joinedAt: "Fri 23 Aug 2024 10:55 AM",
  },
  {
    fullName: "Shalu Dua",
    email: "shalu.dua@greatlakes.co.in",
    role: "Member",
    status: "Active",
    joinedAt: "Fri 23 Aug 2024 10:55 AM",
  },
  {
    fullName: "Albert Thomas",
    email: "albert.thomas@greatlakes.co.in",
    role: "Owner",
    status: "Removed",
    joinedAt: "Fri 23 Aug 2024 10:55 AM",
  },
  {
    fullName: "Shalu Dua",
    email: "shalu.dua@greatlakes.co.in",
    role: "Owner",
    status: "Active",
    joinedAt: "Fri 23 Aug 2024 10:55 AM",
  },
  {
    fullName: "Albert Thomas",
    email: "albert.thomas@greatlakes.co.in",
    role: "Owner",
    status: "In Active",
    joinedAt: "Fri 23 Aug 2024 10:55 AM",
  },
];
export const INVITE_USERS_TITLE = "Invite Users";
export const INVITE_USERS_SUBTITLE = "Invites will be sent to the email addresses you add";
export const INVITE_EMAIL_PLACEHOLDER = "Invite by email (comma separated accepted)";
export const INVITE_BUTTON_TEXT = "Invite";
export const ROLES_DESCRIPTION_TITLE = "Roles Description in Workspaces";
export const ADMIN_TITLE = "Admin";
export const ADMIN_DESCRIPTION = "Admin has access to all the functions in this workspace";
export const MEMBER_TITLE = "Member";
export const MEMBER_DESCRIPTION = "Member can create/delete/invite users to this workspace";
export const FILTERS_LABEL = "Filters:";
export const RESET_FILTERS_TEXT = "Reset all filters";
export const SEARCH_PLACEHOLDER = "Search by email";
export const ROLE_FILTER_BUTTON = "Role";
export const SHOWING_RESULTS_TEXT = "Showing {count} of the {total}";
export const TABLE_HEADER_NAME = "Full name";
export const TABLE_HEADER_EMAIL = "Email address";
export const TABLE_HEADER_ROLE = "Role";
export const TABLE_HEADER_STATUS = "Status";
export const TABLE_HEADER_INVITED_AT = "Invited at";
export const STATUS_ACCEPTED = "Accepted";
export const STATUS_EXPIRED = "Expired";
export const STATUS_PENDING = "Pending";
export const STATUS_ACTIVE = "Active";
export const STATUS_REMOVED = "Removed";
export const ROLE_ADMIN = "Admin";
export const ROLE_MEMBER = "Member";
export const ROLE_OWNER = "Owner";
export const OWNER_TOOLTIP = "Owner of the workspace";
export const MEMBER_TOOLTIP = "Member";
export const SEARCH_BY_EMAIL = "Search by email";
export const USERS = "Users";
export const INVITATIONS = "Invitations";