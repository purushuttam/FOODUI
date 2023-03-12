export interface Response {
  resp: boolean;
  respMsg: string;
  respObj: any | null;
}

export interface TokenResponse {
  token: string | null;
  refreshToken:string | null;
}

export interface UpdateStatus{
  Id:string;
  Status:boolean;
}
