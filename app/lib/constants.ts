// Brand colors and theme constants
export const COLORS = {
  primary: '#611f69',
  primaryDark: '#4a154b',
  primaryLight: '#d972f5',
  darkPurple: '#4a1260',
  deepPurple: '#3b0764',
  darkGray: '#1d1c1d',
  lightBg: '#f4ede4',
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

// Common spacing values
export const SPACING = {
  sectionPadding: 'px-6 py-20',
  maxWidthContent: 'max-w-5xl',
  maxWidthText: 'max-w-2xl',
} as const;
