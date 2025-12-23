import { datasource, getConfigs  } from "@/api/ApiClient";
import type { MyUserResponseDTO } from "@/api/dto/profile/MyUserDTO";

export default {
  myUser() {
    return datasource.get<MyUserResponseDTO>('v1/profile/my_user', getConfigs());
  }
}
