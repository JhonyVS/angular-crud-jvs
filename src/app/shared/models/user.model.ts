export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  username: string;
  password: string;
  role: string;
  createdAt: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token?: string;
}
