import { datasource, getConfigs } from "@/api/ApiClient";
import type { SigninRequest, SigninResponse } from "@/api/dto/auth/SigninDTO";
import type { VerifyTokenRequest, VerifyTokenResponse } from "@/api/dto/auth/VerifyTokenDTO";
import type { ForgotPassowordRequestDTO, ForgotPassowordResponseDTO } from "@/api/dto/auth/ForgotPasswordDTO";
//import { UpdatePassword } from "@/models/UpdatePassword";

export default {
  signin(body:SigninRequest) {
    return datasource.post<SigninResponse>('v1/auth/signin', body);
  },
  verifyToken(body:VerifyTokenRequest) {
    return datasource.post<VerifyTokenResponse>('v1/auth/verify_token', body);
  },
  resetPassword(body:ForgotPassowordRequestDTO) {
    return datasource.post<ForgotPassowordResponseDTO>('v1/auth/forgot_password_token', body);
  },
}
