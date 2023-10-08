export interface AuthResponse {
  token: string;
  user: UserInfo;
}

interface UserInfo {
  email: string;
  username: string;
  gender: string;
}
