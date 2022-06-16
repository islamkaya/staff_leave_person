<template>
  <my-sidebar/>
  <leaveForm ></leaveForm>


</template>
<script>
import leaveForm from "@/ui/components/leaveForm.vue"
import mySidebar from "@/ui/components/mySidebar.vue"
import axios from "axios";
export default {
  data() {
    return {
      userToken: "",
    };
  },
  components: {
    leaveForm,
    mySidebar,
  },
  async mounted() {
    let userToken = localStorage.getItem("Token");
    if (userToken === null) {
      return this.$router.push({ name: "Login" });
    }
    this.userToken = userToken;
    const header = {
      headers: {
        Authorization: "Bearer" + " " + `${userToken}`,
      },
    };
    try {
    var response = await axios.get("api/users/me", header);

    }
    catch(err) {  
      localStorage.clear();
      this.$router.push({name:"Login"});
    }
    if (response.status !== 200) {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style>
body {
  background-color: white;
}
</style>
