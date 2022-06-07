<template>
  <section class="section">
    <div class>
      <div class="row">
        <div class="col-12 col-sm-8
            offset-sm-2
            col-md-6
            offset-md-3
            col-lg-6
            offset-lg-3
            col-xl-4
            offset-xl-4">
          <div class="card">
            <div class="card-header">
              <h4>Login</h4>
            </div>
            <div class="card-body">
              <form
                @submit="store"
                method="POST"
                action="#"
                class="needs-validation"
                novalidate=""
              >
                <!-- <div class="form-group">
                  <label>Provinsi</label>
                  <input type="text" v-model="provinsi.provinsi" class="form-control" />
                </div> -->


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
                  <label
                    class="
                      col-form-label
                      text-md-right
                      col-12 col-md-3 col-lg-3
                    "
                  ></label>
                  <div class="col-sm-12 col-md-7">
                    <button type="submit" class="btn btn-primary">
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
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

       provinsi: {
        provinsi: "",
      },
      //state post
      username : 'suryo',
      password : '123456',
      
      login: {
        username: "",
        password: "",
      },
      //state validation
      validation: [],
    };
  },
  methods: {
    async store(e) {
     e.preventDefault();
 this.username = this.login.username;
      this.password = this.login.password;
       await this.$axios
            .get(`/api/userlogin?username=${this.username}&pwd=${this.password}`)
      .then((response) => {
        console.log("masuk");
        this.posts = response.data;
        console.log(this.posts.message);
                  if (response.data.message == "success") {
            console.log(response.data.data);
            console.log(this.username) 
            console.log(response.data.data[0].id) 
            console.log(response.data.data[0].no_pendaftaran) 
            localStorage.username = this.username;
            localStorage.id = response.data.data[0].id;
            localStorage.no_pendaftaran = response.data.data[0].no_pendaftaran;
            
            this.$router.push({
              name: "dashboard",
            });
          }
      })
      .catch((error) => {
        console.log("error");
      });


    },
  },
};
</script>

<style></style>
