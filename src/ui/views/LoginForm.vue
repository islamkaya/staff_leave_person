<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div id="loginbox" class="col-md-12">
          <form @submit.prevent="handleSubmit">
          <div>
            <div class="h3 text-center">{{ localization.signin }}</div>
            <div class="mb-3">
              <label class="form-label">{{ localization.email }}</label>
              <input type="email" class="form-control" v-model="userName" />
            </div>
            <div class="mb-3">
              <label class="form-label">{{ localization.password }}</label>
              <input type="password" class="form-control" v-model="userPass" />
            </div>
            <div class="text-danger text-center" v-if="loginError == true">
              {{ localization.loginError }}
            </div>
            <div class="mb-3 form-check d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">
                {{ localization.signin }}
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from "@/lang";
import axios from "axios";


export default {
  created() {
    this.localization = tr;

  },
  data() {
    return {
      userName: "",
      userPass: "",
      localization: "",
      loginError: false,
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        identifier: this.userName,
        password: this.userPass,
      };
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        var response = await axios.post("api/auth/local", data, header);
          this.$store.commit("setUserToken", response.data.jwt);
          localStorage.setItem("Token", response.data.jwt);
          this.$router.push({name:"dashboard"});
        
      } catch {
        this.loginError = true;
      }
    },
  },
};
</script>

<style >
#loginbox {
  padding: 5%;
  margin-top: 26%;

  background-color: #ededed;
  border-radius: 5%;
}
</style>
