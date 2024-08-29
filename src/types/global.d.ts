interface ProjectsTypes {
  id: number;
  name: string;
  description: string;
  url: string;
  productionUrl: string;
  tools: Record<string, { percentage: number; color: string }>;
  stack: "FRONTEND" | "BACKEND" | "FULLSTACK";
  mainTools: Record<
    string,
    { color: string; borderColor: "cyan" | "green" | "gray" }
  >;
  image: string;
}

interface JobTypes {
  period: {
    start: string;
    end: string;
  };
  companyName: string;
  site: string;
  role: string;
  locationType: string;
  description: string;
  isPresent: boolean;
}

interface CourseTypes {
  schoolName: string;
  courseName: string;
  period: string;
  type?: "Undergraduate" | "Certificate";
  credentialLink?: string;
}
