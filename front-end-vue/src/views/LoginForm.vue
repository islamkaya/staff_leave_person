<template>
  <div id="login">
    <div class="container">
      <div id="login-row" class="row justify-content-center text-align-items">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
              <h3 class="h3 mt-3">Giriş Yap</h3>
            <form id="login-form">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email</label
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
                  >Şifre</label
                >
                <input
                    size="1"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
