export type UserRole = 'student' | 'teacher';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface Education {
  level: string;
  field: string;
  institution: string;
  year: number;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: number;
  deadline: string;
  eligibility: string;
  link: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  level: string;
  url: string;
  thumbnail: string;
}