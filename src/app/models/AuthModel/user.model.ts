export interface UserDto {
  userType: string | null;
  username: string;
  email: string | null;
  password: string;
}

export interface UserLogin{
  username: string;
  password: string;
}
