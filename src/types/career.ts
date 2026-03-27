export interface StudentFormData {
  level: "10th" | "12th" | "";
  stream: "Science" | "Commerce" | "Arts" | "";
  percentage: number;
  state: string;
  city: string;
  interests: string[];
  strongSubjects: string[];
  skills: {
    logicalThinking: number;
    creativity: number;
    communication: number;
    leadership: number;
    problemSolving: number;
    technicalInterest: number;
  };
  goal: string;
  budget: string;
  preferredCollegeState: string;
}

export interface CourseRecommendation {
  id: string;
  name: string;
  suitabilityScore: number;
  matchReason: string;
  duration: string;
  difficultyLevel: "Easy" | "Moderate" | "Hard" | "Very Hard";
  requiredStream: string;
  futureDemand: "Very High" | "High" | "Medium" | "Low";
  icon: string;
}

export interface RoadmapYear {
  year: number;
  title: string;
  subjects: string[];
  skills: string[];
  tools: string[];
  languages?: string[];
  projects: { level: string; name: string }[];
}

export interface SemesterSubjects {
  semester: number;
  subjects: string[];
}

export interface College {
  name: string;
  city: string;
  state: string;
  type: "Government" | "Private";
  totalFees: string;
  yearWiseFees: string[];
  hostelFee: string;
  admissionProcess: string;
  entranceExam: string;
  courseTimeline: string;
  category: "top-government" | "top-private" | "budget-friendly";
}

export interface JobRole {
  title: string;
  fresherSalary: string;
  twoYearSalary: string;
  fiveYearSalary: string;
  tenYearSalary: string;
}

export interface Company {
  name: string;
  type: "Indian" | "Global";
  roles: string[];
}

export interface CourseDetail {
  overview: {
    description: string;
    eligibility: string;
    duration: string;
    skillsGained: string[];
    entranceExams: string[];
  };
  roadmap: RoadmapYear[];
  semesters: SemesterSubjects[];
  colleges: College[];
  futureScope: {
    demandIndia: string;
    globalScope: string;
    industriesHiring: string[];
    growthPrediction: string;
    aiAutomationRisk: "Low" | "Medium" | "High";
  };
  jobRoles: JobRole[];
  companies: Company[];
  highestPayingRoles: string[];
  highestPayingCountries: string[];
  actionPlan: {
    sevenDays: string[];
    threeMonths: string[];
    oneYear: string[];
  };
}

export const INTERESTS = [
  "AI/ML", "Software Development", "Data Science", "Cybersecurity", "Cloud Computing",
  "Robotics/IoT", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering",
  "Medicine", "Pharmacy", "Law", "Finance", "Business", "Government Jobs",
  "Design/UI-UX", "Teaching/Research", "Media/Content"
];

export const STRONG_SUBJECTS = [
  "Mathematics", "Physics", "Chemistry", "Biology", "English",
  "Computer Science", "Economics", "Accountancy", "Business Studies",
  "History", "Political Science", "Psychology", "Sociology"
];

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal"
];

export const GOALS = [
  "High Salary", "Follow My Passion", "Job Stability", "Go Abroad", "Government Job"
];

export const BUDGETS = [
  "Under ₹1 Lakh", "₹1L – ₹3L", "₹3L – ₹7L", "Above ₹7L"
];
