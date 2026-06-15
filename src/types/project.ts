import React from "react";

export interface Project {
  title: string;
  category: "frontend" | "fullstack" | "backend";
  description: string;
  tags: string[];
  github: string;
  demo: string;
  features: string[];
  visualMockup: React.ReactNode;
}
