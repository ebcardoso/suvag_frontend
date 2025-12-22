import BaseViewmodel from "@/viewmodels/BaseViewmodel";
import ProfileApi from "@/api/modules/ProfileApi";

export default class ProfileViewmodel extends BaseViewmodel {
  constructor() {
    super();
  }

  //Page Titles
  getTitleShow():string {
    return 'My Profile';
  }

  //Form Fields
  fieldGroups() {
    return [
      {title: "Meu Perfil", fields: this.fields1()},
    ]
  }

  fields1() {
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