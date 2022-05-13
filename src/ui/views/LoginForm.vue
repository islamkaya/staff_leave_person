<template>
  <div id="login">
    <div class="container">
      <div id="login-row" class="row justify-content-center text-align-items">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
              <h3 class="h3 mt-3 text-center ">{{localization.signin}}</h3>
            <form id="login-form">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >{{localization.email}}</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >{{localization.password}}</label
                >
                <input
                    size="1"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="d-flex justify-content-end ">

              <button type="submit" class="btn btn-primary justify-content-end"><i class="fas fa-envelope"></i>{{localization.signin}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from '@/lang'


export default {

  localization : "", 

  created() {

    this.localization = tr;





  }
}


</script>