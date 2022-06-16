<template>
<nav>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white" id="sidebar">
    <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">{{localization.brandName}}</span>
    </a>
    <hr>
    <ul class="nav flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/dashboard">
                <a class="nav-link text-white text-decoration-none" >
         
          {{localization.getLeave}}
        </a>
        </router-link>
      </li>
      <li>
        <router-link to="/leaverequests">
                <a class="nav-link text-white text-decoratio" >
         
          {{localization.leaveRequests}}
        </a>
        </router-link>

      </li>

    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://avatars.githubusercontent.com/u/75262451?v=4" alt="" class="rounded-circle me-2" width="32" height="32">
        <strong>İşçi Adı</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" style="">

        <li><div class="dropdown-item user-select-none" @click="logOut">{{localization.logOut}}</div></li>
      </ul>
    </div>
  </div>
  </nav>

</template>

<script>
import { tr } from "@/lang";
export default {
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({name: 'Login'});
    }
  },
    created() {
    this.localization = tr;
  },

}
</script>

<style>
#sidebar {
  position: absolute;
  width: 20%;
  height: 100vh;
  background-color: #636e72;
}
body {
  background-color: #fff;
}

</style>