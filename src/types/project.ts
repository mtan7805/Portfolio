export interface Project {
  title: string;
  preview: "video" | "hotel" | "api";
  category: "frontend" | "fullstack" | "backend";
  description: string;
  tags: string[];
  github: string;
  demo: string;
  features: string[];
}
