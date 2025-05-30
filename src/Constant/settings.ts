export const CERTIFICATION_TITLE = "Certification";
export const ADD_CERTIFICATE = "Add certificate";
export const CERTIFICATION_NAME = "Certification name";
export const CERTIFY_FROM = "Certify from";
export const COMPLETION_MONTH = "Completion month";
export const COMPLETION_YEAR = "Completion year";
export const VALID_MONTH = "Valid month";
export const VALID_YEAR = "Valid year";
export const CERTIFICATION_ID = "Certification ID";
export const UPDATE_CERTIFICATE = "Update certificate";
export const UPLOAD_CERTIFICATE = "Upload certificate";
export const SUPPORTED_FORMATS_PNG_JPG = "Supported formats: .png, .jpg 2MB";
export const COMPLETION_DATE = "Completion date - ";
export const ADD_CERTIFICATE_MODAL = "Add certificate";
export const CANCEL = "Cancel";
export const SAVE = "Save";
export const EMPLOYMENT_TITLE = "Employment";
export const ADD_EMPLOYMENT = "Add employment";
export const JOB_TYPE = "Job type";
export const FULL_TIME = "Full-time";
export const PART_TIME = "Part-time";
export const CONTRACT = "Contract";
export const FREELANCE = "Freelance";
export const IS_CURRENT_ORGANIZATION = "Is this your current organization?";
export const YES = "Yes";
export const NO = "No";
export const DESIGNATION = "Designation";
export const COMPANY = "Company";
export const JOINING_DATE = "Joining date";
export const WORKED_TILL = "Worked till";
export const YEAR = "Year";
export const MONTH = "Month";
export const ADD_EMPLOYMENT_MODAL = "Add employment";
export const PROFILE_ABOUT_ME = "About me";
export const IMAGE = "IMAGE";
export const KEY_SKILLS = "Key skills";
export const ADD_SKILLS = "Add skills";
export const ADD_SKILLS_PLACEHOLDER = "Add skills";
export const ADD = "Add";
export const SUGGESTED_SKILLS =
  "Or you can select from the suggested set of skills";
export const EMAIL = "alex.jeromini@gmail.com";
export const LOCATION = "Bangalore, India";
export const PROFILE_LAST_UPDATED = "Profile last updated - 30 Nov, 2024";
export const FIRST_NAME = "First name";
export const MIDDLE_NAME = "Middle name";
export const LAST_NAME = "Last name";
export const EMAIL_ADDRESS = "Email address";
export const NOTICE_PERIOD = "Notice period";
export const DIVERSITY_INCLUSION = "Diversity & Inclusion";
export const DISABILITY = "I have a disability";
export const NO_DISABILITY = "I don’t have a disability";
export const FIFTEEN_DAYS_OR_LESS = "15 Days or less";
export const ONE_MONTH = "1 Month";
export const TWO_MONTHS = "2 Months";
export const THREE_MONTHS = "3 Months";
export const THREE_MONTHS_OR_MORE = "3 Months or more";
export const RESUME_TITLE = "Resume";
export const RESUME_DESCRIPTION =
  "B.Tech. in Information Technology with 8 years of experience as Full stack developer cum UI/UX Designer.";
export const UPLOADED_ON = "Uploaded on MAY 2024";
export const UPLOAD_RESUME = "Upload resume";
export const SUPPORTED_FORMATS_DOC =
  "Supported Formats: doc, docx, rtf, pdf, upto 2 MB";
export const PROFILE_COMPLETION = "76%";
export const ABOUT_ME_DESCRIPTION =
  "I am a skilled front-end developer experienced in creating visually stunning and user-friendly websites and applications. I use UI/UX design principles to deliver high-quality products that meet client expectations.";
export const DIVERSITY_INSTRUCTION =
  "Companies want to build inclusive teams, help us identify your disability status for better jobs.";
export const DISABILITY_VALUE = "disability";
export const NO_DISABILITY_VALUE = "no-disability";
export const SVG_CIRCLE_BG = "M18 2a16 16 0 100 32 16 16 0 000-32z";
export const SVG_CIRCLE_ARC = "M18 2a16 16 0 012.29 31.83";
export const SVG_DASH_ARRAY = "76 100";
export const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const YEARS = "8 years";

export const years = Array.from({ length: 25 }, (_, i) =>
  (2020 + i).toString()
);

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  completionMonth?: string;
  completionYear?: string;
  validMonth?: string;
  validYear?: string;
  certificationId?: string;
}

export interface CertificationCardProps {
  certifications: Certification[];
  onUpdate?: (index: number, updatedCert: Certification) => void;
  onAdd?: (newCert: Certification) => void;
}

export const TITLE = "title";
