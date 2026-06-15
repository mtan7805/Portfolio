import React from "react";

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  category: string;
  icon: React.ReactNode;
  hoverBorder: string;
  tagHoverBorder: string;
  skills: Skill[];
}
