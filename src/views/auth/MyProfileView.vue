<template>
  <ShowPage :model=model :viewmodel=viewmodel />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShowPage from "@/components/show/ShowPage.vue";
import ProfileViewmodel from "@/viewmodels/ProfileViewmodel";
import type { MyUserResponseDTO } from "@/api/dto/profile/MyUserDTO";
import type { User } from "@/models/User";

export default defineComponent({
  name:'ProvileView',
  components: {
    ShowPage,
  },
  emits: [
    'update:setPageTitle'
  ],
  data() {
    return {
      viewmodel: new ProfileViewmodel(),
      model: {} as User
    }
  },
  mounted() {
    const pageTitle = this.viewmodel.getTitleShow();
    this.$emit('update:setPageTitle', pageTitle);

    this.setModel();
  },
  methods: {
    async setModel() {
      await this.viewmodel.findMyProfile().then(response => {
        const profile:MyUserResponseDTO = response.data;
        this.model.name = profile.name;
        this.model.cpf = profile.cpf;
        this.model.email = profile.email;
      }).catch(() => {
        this.viewmodel.createAlert(
          'danger', //success, warning or danger
          'Erro ',
          "ao carregar o perfil do usuário.",
        );
      });
    }
  }
})
</script>
