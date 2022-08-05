export interface AuthenticateUserDTO {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: { name: string; email: string };
  accessToken: string;
  refreshToken: string;
}

export interface IAuthService {
  authenticate(data: AuthenticateUserDTO): Promise<AuthResponse>;
  refresh(
    token: string
  ): Promise<{ accessToken: string; refreshToken: string }>;
}
