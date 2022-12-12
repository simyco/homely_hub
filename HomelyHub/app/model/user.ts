export interface User {
  id?: number;
  name?: string;
  surname?: string;
  email?: string;
  imageUrl?: string;
  userId?: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
export interface ChangePasswordForm {
  passwordActual: string;
  passwordNew: string;
  passwordNewConfirm: string;
}
