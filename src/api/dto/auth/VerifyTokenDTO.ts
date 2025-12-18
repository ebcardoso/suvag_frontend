export interface VerifyTokenRequest {
  token:string
}

export interface VerifyTokenResponse {
  message:string,
  is_valid:boolean
}
