export interface setProfileRes {
  user?: {
    email: string;
    name: string;
    password: string;
    username: string;
  };
  code?: number;
  error: boolean;
  message?: string;
}
