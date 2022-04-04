<template>
  <section class="section">
    <div class="container mt-8">
      <div class="row">
        <div
          class="
            col-12 col-sm-8
            offset-sm-2
            col-md-6
            offset-md-3
            col-lg-6
            offset-lg-3
            col-xl-4
            offset-xl-4
          "
        >
          <div class="login-brand">
            <!-- <img
              src="#"
              alt="logo"
              width="100"
              class="shadow-light rounded-circle"
            /> -->
          </div>

          <div class="card card-primary">
            <div class="card-header"><h4>Login</h4></div>

            <div class="card-body">
              <!-- <form
                method="POST"
                action="/dashboard"
                class="needs-validation"
                novalidate=""
              > -->
              <form
                @submit="store"
                method="POST"
                action="#"
                class="needs-validation"
                novalidate=""
              >
                <div class="form-group">
                  <label for="email">Username</label>
                  <input
                    id="username"
                    v-model="login.username"
                    class="form-control"
                    name="email"
                    tabindex="1"
                    required
                    autofocus
                  />
                  <div class="invalid-feedback">Please fill in your email</div>
                </div>

                <div class="form-group">
                  <div class="d-block">
                    <label for="password" class="control-label">Password</label>
                    <div class="float-right">
                      <!-- <a href="auth-forgot-password.html" class="text-small">
                        Forgot Password?
                      </a> -->
                    </div>
                  </div>
                  <input
                    id="password"
                    type="password"
                    v-model="login.password"
                    class="form-control"
                    name="password"
                    tabindex="2"
                    required
                  />
                  <div class="invalid-feedback">
                    please fill in your password
                  </div>
                </div>

                <div class="form-group">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      name="remember"
                      class="custom-control-input"
                      tabindex="3"
                      id="remember-me"
                    />
                    <!-- <label class="custom-control-label" for="remember-me"
                      >Remember Me</label
                    > -->
                  </div>
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                    tabindex="4"
                  >
                    Login
                  </button>
                   <a href="..">back</a>
                </div>
              </form>
            </div>
          </div>
          <div class="mt-5 text-muted text-center">
            Don't have an account?
            <a href="auth-register.html">WhatsApp to +62856 4922 4822</a>

            <div class="simple-footer">Copyright &copy; SuryoAtmojo 2022</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  auth: false,
  layout: "blank",
  data() {
    return {
      //state post
      login: {
        username: "",
        password: "",
      },
      //state validation
      validation: [],
    };
  },
  methods: {
    //method "store"
    async store(e) {
      e.preventDefault();
      username = this.login.username;
      password = this.login.password;
      console.log(username);
      console.log(password);
      let endPoint = `/api/userlogin/?username=${username}&pwd=${password}`;
      console.log(endPoint);
      await this.$axios
        .$get(endPoint)
        .then((res) => {
          console.log(res);
          if (res.data.status == "ok") {
            // console.log(res.data.status);
            localStorage.username = username;
            localStorage.id = res.data.id;
            
            this.$router.push({
              name: "dashboard",
            });
          }
        })
        .catch(function (err) {
          console.log(err);
        });
      //  await this.$axios
      //   .get(`/api/userlogin/?username?username=${username}&pwd=${password}`, {
      //     //data yang dikirim ke server
      //     provinsi: this.provinsi.provinsi,
      //   })
      //   .then(() => {
      //     //redirect ke route "post"
      //     this.$router.push({
      //       name: "provinsi",
      //     });
      //   })
      //   .catch((error) => {
      //     //assign validation
      //     this.validation = error.response.data;
      //   });

      //send data ke Rest API
      // await this.$axios
      //   .post("/api/provinsi", {
      //     //data yang dikirim ke server
      //     provinsi: this.provinsi.provinsi,
      //   })
      //   .then(() => {
      //     //redirect ke route "post"
      //     this.$router.push({
      //       name: "provinsi",
      //     });
      //   })
      //   .catch((error) => {
      //     //assign validation
      //     this.validation = error.response.data;
      //   });
    },
  },
};
</script>

<style></style>
