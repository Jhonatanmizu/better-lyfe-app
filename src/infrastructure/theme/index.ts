import { createTheme } from '@shopify/restyle';

const palette = {
  // Primary brand colors
  mintGreen: '#66CCAA',
  mintGreenLight: '#d1f0e5',
  mintGreenLighter: '#e8f8f2',

  // Accent colors (Habits screen flame icon backgrounds)
  amberLight: '#fde68a',
  amberLighter: '#fef3c7',

  // Accent colors (AI Insights screen sparkles icon backgrounds)
  violetLight: '#ddd6fe',
  violetLighter: '#ede9fe',

  // Background colors
  background: '#F8FAFC',

  // Text colors
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',

  // UI colors
  white: '#FFFFFF',
  inactive: '#E2E8F0',
  error: '#F87171',

  // Legacy colors (kept for compatibility)
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',
  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',
  black: '#0B0B0B',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.background,
    cardPrimaryBackground: palette.mintGreen,
    primary: palette.mintGreen,
    primaryLight: palette.mintGreenLight,
    primaryLighter: palette.mintGreenLighter,
    amberLight: palette.amberLight,
    amberLighter: palette.amberLighter,
    violetLight: palette.violetLight,
    violetLighter: palette.violetLighter,
    textPrimary: palette.textPrimary,
    textSecondary: palette.textSecondary,
    textMuted: palette.textMuted,
    white: palette.white,
    inactive: palette.inactive,
    error: palette.error,
    // Legacy colors
    purpleLight: palette.purpleLight,
    purplePrimary: palette.purplePrimary,
    purpleDark: palette.purpleDark,
    greenLight: palette.greenLight,
    greenPrimary: palette.greenPrimary,
    greenDark: palette.greenDark,
    black: palette.black,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 26,
    xl: 40,
    full: 9999,
  },
  textVariants: {
    header: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: 34,
    },
    title: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: '700',
      lineHeight: 36,
      color: 'textPrimary',
    },
    body: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 24,
    },
    description: {
      fontFamily: 'Inter',
      fontSize: 15,
      lineHeight: 22.5,
      color: 'textSecondary',
    },
    button: {
      fontFamily: 'Inter',
      fontSize: 17,
      fontWeight: '600',
      color: 'white',
    },
    skip: {
      fontFamily: 'Inter',
      fontSize: 15,
      fontWeight: '500',
      color: 'textMuted',
    },
    label: {
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: '500',
      color: 'textPrimary',
    },
    input: {
      fontFamily: 'Inter',
      fontSize: 15,
      color: 'textPrimary',
    },
    subtitle: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: '400',
      color: 'textMuted',
    },
    link: {
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: '600',
      color: 'primary',
    },
    caption: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: 'error',
    },
    defaults: {
      fontFamily: 'Inter',
    },
  },
});

export type Theme = typeof theme;
export { palette };
export default theme;
