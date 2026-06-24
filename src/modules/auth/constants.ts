export const AUTH_SCREENS = {
  LOGIN: 'Login',
  REGISTER: 'Register',
  FORGOT_PASSWORD: 'ForgotPassword',
} as const;

export const AUTH_ROUTES = {
  AUTH: 'authRoutes',
} as const;

export const AUTH_STORAGE_KEYS = {
  USER: '@auth:user',
  TOKEN: '@auth:token',
  REFRESH_TOKEN: '@auth:refreshToken',
} as const;
