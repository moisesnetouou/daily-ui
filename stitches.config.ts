import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const defaultTheme = {
  colors: {
    blur: 'rgba(22, 22, 24, 0.5)',
    border: '#2e2e32',
    gray100: '#424242',
    gray200: '#616161',
    gray300: '#757575',
    gray400: '#9E9E9E',
    gray50: '#212121',
    gray500: '#BDBDBD',
    gray600: '#E0E0E0',
    gray700: '#EEEEEE',
    gray800: '#F5F5F5',
    gray900: '#FAFAFA',
    hiContrast: '#ffffff',
    loContrast: '#161618',
    table: 'transparent',
    black: '#000000',
    white: '#ffffff',
    blue: '#52a9ff',
    green: '#26B38D',
    highlighter: '#E6A6BE',
    red: '#FF4343',
  },
  fonts: {
    heading: 'Whyte Inktrap',
    sans: 'Inter, sans-serif',
    mono: 'Fira Mono, monospace',
  },
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '20px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '72px',
  },
  space: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px',
    7: '256px',
    8: '512px',
  },
  sizes: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px',
    7: '256px',
    8: '512px',
  },
  lineHeights: {
    1: '18px',
    2: '21px',
    3: '24px',
    4: '30px',
    5: '36px',
    6: '48px',
    7: '72px',
    8: '96px',
    9: '108px',
  },
  radii: {
    1: '2px',
    2: '4px',
    3: '8px',
    4: '10px',
    5: '12px',
    6: '14px',
    round: '9999px',
  },
};

export const lightTheme = {
  blur: 'rgba(255, 255, 255, 0.5)',
  border: '#E0E0E0',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray50: '#FAFAFA',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
  hiContrast: '#000000',
  loContrast: '#ffffff',
  table: '#FCFCFC',
};

const media = {
  bp1: `(max-width: 320px)`,
  bp2: `(max-width: 600px)`,
  bp3: `(max-width: 900px)`,
  bp4: `(max-width: 1120px)`,
  bp5: `(max-width: 1420px)`,
  motion: `(prefers-reduced-motion)`,
  hover: `(hover: hover)`,
  dark: `(prefers-color-scheme: dark)`,
  light: `(prefers-color-scheme: light)`,
};

const utils = {
  // Abbreviated margin properties
  m: (value: any) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),

  mt: (value: any) => ({
    marginTop: value,
  }),
  mr: (value: any) => ({
    marginRight: value,
  }),
  mb: (value: any) => ({
    marginBottom: value,
  }),
  ml: (value: any) => ({
    marginLeft: value,
  }),
  mx: (value: any) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: any) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: any) => ({
    paddingTop: value,
  }),
  pr: (value: any) => ({
    paddingRight: value,
  }),
  pb: (value: any) => ({
    paddingBottom: value,
  }),
  pl: (value: any) => ({
    paddingLeft: value,
  }),
  px: (value: any) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // A property for applying width/height together
  size: (value: any) => ({
    width: value,
    height: value,
  }),

  // A property to apply linear gradient
  linearGradient: (value: any) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),

  // An abbreviated property for border-radius
  br: (value: any) => ({
    borderRadius: value,
  }),
};

export const { styled, createTheme, css, keyframes, getCssText, globalCss } =
  createStitches({
    theme: defaultTheme,
    utils,
    media,
  });

export const globalStyles = globalCss({
  body: {
    margin: 0,
    backgroundColor: '$loContrast',
    color: '$hiContrast',
  },

  'body, button': {
    fontFamily: '$sans',
  },

  svg: { display: 'block' },

  pre: { margin: 0 },

  '::selection': {
    backgroundColor: '$violet300',
  },

  '@font-face': {
    fontFamily: 'Whyte Inktrap',
    src: 'url("/fonts/whyte/inktrap-heavy.woff2") format("woff2"), url("/fonts/whyte/inktrap-heavy.woff") format("woff")',
    fontWeight: 900,
    fontStyle: 'normal',
    fontDisplay: 'block',
  },
});

export const lightThemeClass = createTheme({ colors: lightTheme });
