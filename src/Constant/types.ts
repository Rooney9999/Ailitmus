// types.ts

export interface Employment {
  title: string;
  company: string;
  duration: string;
  jobType?: string;
  isCurrent?: boolean;
  startDate?: { month: string; year: string };
  endDate?: { month: string; year: string };
}

export interface EmploymentCardProps {
  employments: Employment[];
  onEditEmployment: (employment: Employment, index: number) => void;
}

export interface EmploymentEditFormProps {
  employment: Employment;
  index: number;
  onSave: (updatedEmployment: Employment, index: number) => void;
  onCancel: () => void;
}


// types/profile.ts
export interface Employment {
  title: string;
  company: string;
  duration: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface EmploymentForm {
  jobType: string;
  designation: string;
  company: string;
  joiningYear: string;
  joiningMonth: string;
  workedTillYear: string;
  workedTillMonth: string;
  isCurrent: string;
}