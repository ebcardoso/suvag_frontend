export interface SigninRequest {
  email:string,
  password:string,
}

export interface SigninResponse {
  message:string,
  token:string,
}
