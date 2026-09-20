import type { SVGProps } from "react";
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number;
}
export const Github = ({ size = 20, ...props }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>);
// --- Tech Stack Brand Icons ---
export const ReactIcon = ({ size = 24, ...props }: IconProps) => (<svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>);
export const TailwindIcon = ({ size = 24, ...props }: IconProps) => (<svg viewBox="0 0 33 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M16.5 0C21.6 0 24.8 2.6 26.2 7.7C28.3 5.1 30.7 3.8 33 3.8C33 8.9 29.8 12.2 24.8 12.2C19.7 12.2 16.5 9.6 15.1 4.5C13 7.1 10.6 8.4 8.3 8.4C8.3 3.3 11.5 0 16.5 0ZM8.3 11.6C13.4 11.6 16.6 14.1 18 19.3C20.1 16.7 22.5 15.4 24.8 15.4C24.8 20.5 21.6 23.8 16.6 23.8C11.5 23.8 8.3 21.2 6.9 16.1C4.8 18.7 2.4 20 0 20C0 14.9 3.2 11.6 8.3 11.6Z" fill="#38BDF8"/>
  </svg>);
