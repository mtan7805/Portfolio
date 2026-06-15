import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Github = ({ size = 20, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Linkedin = ({ size = 20, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Tech Stack Brand Icons ---

export const ReactIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextjsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="64" cy="64" r="64" fill="black" />
    <path d="M100.8 102.4L46.8 33.6H38.4V94.4H45.6V44L94 105.6C96.4 104.8 98.8 103.6 100.8 102.4Z" fill="url(#nextjs-glow)" />
    <path d="M84.8 33.6H92V94.4H84.8V33.6Z" fill="url(#nextjs-glow)" />
    <defs>
      <linearGradient id="nextjs-glow" x1="64" y1="33.6" x2="64" y2="105.6" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const TypescriptIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="128" height="128" fill="#3178C6" rx="16" />
    <path d="M108.6 83c-1.3-2.6-3.2-4.9-5.7-6.5-2.6-1.6-5.6-2.5-8.8-2.5-4 0-7.3 1.1-9.8 3.4-2.5 2.3-3.7 5.7-3.7 10.3 0 4 1.1 7.1 3.2 9.5 2.1 2.3 5.4 3.9 9.8 4.7 4.5.8 8.1 1.8 10.7 3 2.6 1.2 4.7 2.9 6.2 5.1s2.2 4.8 2.2 8c0 4.9-1.8 8.9-5.4 12.1-3.6 3.1-8.5 4.7-14.7 4.7-4.2 0-8.2-.8-11.9-2.5-3.7-1.7-6.7-4.3-9-7.8l9.5-6c1.6 2.3 3.5 4 5.9 5.2 2.3 1.1 4.9 1.7 7.7 1.7 3.5 0 6.3-.9 8.2-2.6 2-1.7 2.9-4.1 2.9-7.2 0-3.3-1.1-5.9-3.2-7.8-2.1-1.9-5.4-3.3-9.9-4.2-4.8-.9-8.7-2.1-11.6-3.7-2.9-1.6-5.1-3.7-6.7-6.3-1.6-2.6-2.4-5.8-2.4-9.6 0-4.8 1.7-8.8 5.1-11.8 3.4-3 8-4.5 13.8-4.5 3.9 0 7.6.7 11 2.2 3.4 1.5 6.2 3.7 8.3 6.6l-9.1 6.1zm-48.4-24.8H82.4v9.9H71v41.2H60.2V68.1H48.8V58.2z" fill="white" />
  </svg>
);

export const TailwindIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 33 20" width={size} height={size} fill="currentColor" {...props}>
    <path d="M16.5 0C21.6 0 24.8 2.6 26.2 7.7C28.3 5.1 30.7 3.8 33 3.8C33 8.9 29.8 12.2 24.8 12.2C19.7 12.2 16.5 9.6 15.1 4.5C13 7.1 10.6 8.4 8.3 8.4C8.3 3.3 11.5 0 16.5 0ZM8.3 11.6C13.4 11.6 16.6 14.1 18 19.3C20.1 16.7 22.5 15.4 24.8 15.4C24.8 20.5 21.6 23.8 16.6 23.8C11.5 23.8 8.3 21.2 6.9 16.1C4.8 18.7 2.4 20 0 20C0 14.9 3.2 11.6 8.3 11.6Z" fill="#38BDF8" />
  </svg>
);

export const NestjsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 256 256" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="128" cy="128" r="128" fill="#1f2937" />
    <path d="M171.1 175.8c-1.9 2.1-4.7 3.3-7.5 3.3h-22.3l-19.4-27.9c-1.5-2.2-4-3.5-6.6-3.5H97.7l-9.7 14c-1.5 2.2-4 3.5-6.6 3.5H57.3c-2.8 0-5.5-1.2-7.5-3.3-1.9-2.1-2.7-5-2-7.8l17.7-68.5c1-3.8 4.4-6.4 8.3-6.4h-0.2v0.2h22.3l19.4 27.9c1.5 2.2 4 3.5 6.6 3.5h17.6l9.7-14c1.5-2.2 4-3.5 6.6-3.5h24.1c2.8 0 5.5 1.2 7.5 3.3 1.9 2.1 2.7 5 2 7.8l-17.7 68.5c-1 3.9-4.4 6.5-8.3 6.5z" fill="#E0234E" />
  </svg>
);

export const NodejsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 256 256" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="256" height="256" fill="#1f2937" rx="32" />
    <path d="M128 40L44 88.5v97L128 234l84-48.5v-97L128 40zm-12.8 147.2v-62.4L73.6 99.8l41.6-25v62.4l41.6 25-41.6 25z" fill="#339933" />
  </svg>
);

export const GitIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="128" height="128" fill="#1f2937" rx="20" />
    <path d="M110 57.6L70.4 18c-3.5-3.5-9.2-3.5-12.7 0L46.8 28.9l11.6 11.6c2.6-.9 5.6-.2 7.6 1.9 2 2 2.6 5 1.9 7.6l11.6 11.6c2.6-.8 5.6-.2 7.6 2 3 3 3 7.8 0 10.8s-7.8 3-10.8 0c-2.2-2.2-2.8-5.2-2-7.9L62.7 54c-.9.2-1.8.4-2.7.4-.9 0-1.9-.2-2.7-.4L45.7 65.6c.8 2.6.2 5.7-2 7.9-3 3-7.8 3-10.8 0s-3-7.8 0-10.8c2.2-2.2 5.2-2.8 7.9-2l11.6-11.6c-.6-1.7-.5-3.7.3-5.4L41 32 18 55c-3.5 3.5-3.5 9.2 0 12.7l42.3 42.3c3.5 3.5 9.2 3.5 12.7 0l37-37c3.5-3.4 3.5-9.1 0-12.7z" fill="#F05032" />
  </svg>
);

export const DockerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 256 256" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="256" height="256" fill="#1f2937" rx="32" />
    <g fill="#2496ED">
      <rect x="139" y="88" width="20" height="20" rx="2" />
      <rect x="114" y="88" width="20" height="20" rx="2" />
      <rect x="89" y="88" width="20" height="20" rx="2" />
      <rect x="64" y="88" width="20" height="20" rx="2" />
      <rect x="114" y="63" width="20" height="20" rx="2" />
      <rect x="89" y="63" width="20" height="20" rx="2" />
      <rect x="89" y="38" width="20" height="20" rx="2" />
      <rect x="139" y="63" width="20" height="20" rx="2" />
      <path d="M185 120H0c0 22 14.8 42.5 36.6 51.6.6.3 1.4.4 2.2.5a9.5 9.5 0 002.3-.1c3.2-.7 6-2.5 7.9-5.1l.1-.1a5.2 5.2 0 012.3-.3zm54.9-6c-.4-.3-1.7-.8-3.8-.8-.3 0-.6 0-.9.1-.4-2-1.5-3.1-2.9-3.1-.2 0-.4 0-.6.1v2.2c0 1.3 1 1.9 1 1.9s.1 0 .1.1c2.3 0 3.7.8 3.9 1.6v0c-.2.5-1.1.9-2.6 1.1-.5.1-1.1.1-1.7.1h-.1c-.2.3-.4.6-.6.9h.1c.5 0 1 0 1.5 0 1.5 0 3-.1 3.9-.9A2.5 2.5 0 00240 120v-.1z" />
    </g>
  </svg>
);
