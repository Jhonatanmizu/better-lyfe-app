import { create } from 'zustand';
import { setStorage, getStorageValue, removeStorage } from '@shared/storage/mmkv';
import { AuthService, User, AuthResponse } from '@/modules/auth/services';
import { AUTH_STORAGE_KEYS } from '@/modules/auth/constants';

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
}

interface AuthActions {
  initialize: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<{ message: string }>;
  logout: () => Promise<void>;
  refreshAuthToken: () => Promise<void>;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  clearError: () => void;
  clearAuth: () => void;
}

export type UseAuthStore = AuthState & AuthActions;

const persistAuth = (data: AuthResponse): void => {
  setStorage(AUTH_STORAGE_KEYS.USER, data.user);
  setStorage(AUTH_STORAGE_KEYS.TOKEN, data.token);
  setStorage(AUTH_STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
  AuthService.setAuthToken(data.token);
};

const clearPersistedAuth = (): void => {
  removeStorage(AUTH_STORAGE_KEYS.USER);
  removeStorage(AUTH_STORAGE_KEYS.TOKEN);
  removeStorage(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
  AuthService.clearAuthToken();
};

const loadPersistedAuth = (): { user: User | null; token: string | null; refreshToken: string | null } => {
  const user = getStorageValue<User>(AUTH_STORAGE_KEYS.USER);
  const token = getStorageValue<string>(AUTH_STORAGE_KEYS.TOKEN);
  const refreshToken = getStorageValue<string>(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
  return { user, token, refreshToken };
};

export const useAuthStore = create<AuthState & AuthActions>()((set, get) => ({
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  isInitialized: false,
  error: null,

  initialize: async () => {
    try {
      const { user, token, refreshToken } = loadPersistedAuth();

      if (token && user) {
        AuthService.setAuthToken(token);
        set({
          user,
          token,
          refreshToken,
          isAuthenticated: true,
          isInitialized: true,
        });
      } else {
        set({ isInitialized: true });
      }
    } catch {
      clearPersistedAuth();
      set({ isInitialized: true });
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await AuthService.login({ email, password });
      persistAuth(response);
      set({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: unknown) {
      let errorMessage = 'Login failed. Please try again.';
      if (error instanceof Error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        if (axiosError.response?.data?.message) {
          errorMessage = axiosError.response.data.message;
        }
      }
      set({ isLoading: false, error: errorMessage });
      throw error;
    }
  },

  register: async (firstName: string, lastName: string, email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await AuthService.register({ firstName, lastName, email, password });
      persistAuth(response);
      set({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: unknown) {
      let errorMessage = 'Registration failed. Please try again.';
      if (error instanceof Error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        if (axiosError.response?.data?.message) {
          errorMessage = axiosError.response.data.message;
        }
      }
      set({ isLoading: false, error: errorMessage });
      throw error;
    }
  },

  forgotPassword: async (email: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await AuthService.forgotPassword({ email });
      set({ isLoading: false });
      return response;
    } catch (error: unknown) {
      let errorMessage = 'Failed to send reset email. Please try again.';
      if (error instanceof Error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        if (axiosError.response?.data?.message) {
          errorMessage = axiosError.response.data.message;
        }
      }
      set({ isLoading: false, error: errorMessage });
      throw error;
    }
  },

  logout: async () => {
    const { refreshToken } = get();
    set({ isLoading: true });
    try {
      if (refreshToken) {
        await AuthService.logout();
      }
    } catch {
      // Continue with logout even if API call fails
    } finally {
      clearPersistedAuth();
      set({
        user: null,
        token: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }
  },

  refreshAuthToken: async () => {
    const { refreshToken: currentRefreshToken } = get();
    if (!currentRefreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await AuthService.refreshToken({
        refreshToken: currentRefreshToken,
      });
      persistAuth(response);
      set({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      });
    } catch (error) {
      clearPersistedAuth();
      set({
        user: null,
        token: null,
        refreshToken: null,
        isAuthenticated: false,
      });
      throw error;
    }
  },

  setUser: (user: User | null) => {
    set({ user });
    if (user) {
      setStorage(AUTH_STORAGE_KEYS.USER, user);
    } else {
      removeStorage(AUTH_STORAGE_KEYS.USER);
    }
  },

  setToken: (token: string | null) => {
    set({ token });
    if (token) {
      setStorage(AUTH_STORAGE_KEYS.TOKEN, token);
      AuthService.setAuthToken(token);
    } else {
      removeStorage(AUTH_STORAGE_KEYS.TOKEN);
      AuthService.clearAuthToken();
    }
  },

  clearError: () => {
    set({ error: null });
  },

  clearAuth: () => {
    clearPersistedAuth();
    set({
      user: null,
      token: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },
}));
