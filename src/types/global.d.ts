interface ProjectsTypes {
  id: number;
  name: string;
  description: string;
  url: string;
  createdAt: string;
  tools: Record<string, { percentage: number; color: string }>;
  stack: "FRONTEND" | "BACKEND" | "FULLSTACK";
  mainTools: Record<string, { color: string; borderColor: "cyan" | "green" }>;
  image: string;
}
