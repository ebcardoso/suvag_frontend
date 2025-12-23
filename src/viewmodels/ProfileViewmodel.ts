import BaseViewmodel from "@/viewmodels/BaseViewmodel";
import ProfileApi from "@/api/modules/ProfileApi";
import type { FormItem } from "@/models/FormItem";
import type { FormGroup } from "@/models/FormGroup";

export default class ProfileViewmodel extends BaseViewmodel {
  constructor() {
    super();
  }

  //Page Titles
  getTitleShow():string {
    return 'My Profile';
  }

  //Form Fields
  fieldGroups():Array<FormGroup> {
    return [
      {title: "Meu Perfil", fields: this.fieldsProfile()}
    ]
  }

  fieldsProfile():Array<FormItem> {
    return [
      {
        name: "name",
        label: "Nome do Usuário:",
        type: "text",
        required: true, 
        canShow: true
      },
      {
        name: "email",
        label: "E-Mail:",
        type: "text",
        required: true,
        canShow: true
      },
    ]
  }

  //Service Actions
  findMyProfile() {
    return ProfileApi.myUser();
  }
}