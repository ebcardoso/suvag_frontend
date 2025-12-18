import { datasource, getConfigs } from "@/api/ApiClient";
import type { SigninRequest, SigninResponse } from "@/api/dto/auth/SigninDTO";
import type { VerifyTokenRequest, VerifyTokenResponse } from "@/api/dto/auth/VerifyTokenDTO";
//import { UpdatePassword } from "@/models/UpdatePassword";

export default {
  signin(body:SigninRequest) {
    return datasource.post<SigninResponse>('v1/auth/signin', body);
  },
  verifyToken(body:VerifyTokenRequest) {
    return datasource.post<VerifyTokenResponse>('v1/auth/verify_token', body);
  },
}
