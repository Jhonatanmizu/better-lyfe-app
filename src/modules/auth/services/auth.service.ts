import axios from 'axios';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
}

export interface MessageResponse {
  message: string;
}

export interface AuthError {
  message: string;
  code: string;
}

const API_URL = process.env.API_URL || 'https://dev-api.example.com';

const authApi = axios.create({
  baseURL: `${API_URL}/auth`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export class AuthService {
  public static async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await authApi.post<AuthResponse>('/login', data);
    return response.data;
  }

  public static async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await authApi.post<AuthResponse>('/register', data);
    return response.data;
  }

  public static async forgotPassword(
    data: ForgotPasswordRequest,
  ): Promise<MessageResponse> {
    const response = await authApi.post<MessageResponse>(
      '/forgot-password',
      data,
    );
    return response.data;
  }

  public static async refreshToken(
    data: RefreshTokenRequest,
  ): Promise<AuthResponse> {
    const response = await authApi.post<AuthResponse>('/refresh-token', data);
    return response.data;
  }

  public static async logout(): Promise<void> {
    await authApi.post('/logout');
  }

  public static setAuthToken(token: string): void {
    authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  public static clearAuthToken(): void {
    delete authApi.defaults.headers.common.Authorization;
  }
}
