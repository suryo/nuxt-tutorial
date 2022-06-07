<template>
  <section class="section">
    <div class>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4>Input Text</h4>
            </div>
            <div class="card-body">
              <form
                @submit="store"
                method="POST"
                action="#"
                class="needs-validation"
                novalidate=""
              >
                <div class="form-group">
                  <label>Provinsi</label>
                  <input type="text" v-model="provinsi.provinsi" class="form-control" />
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
  layout: "stisla/default",
  components: {},
  data() {
    return {
      //state post
      provinsi: {
        provinsi: "",
      },
      //state validation
      validation: [],
    };
  },

  methods: {
    //method "store"
    async store(e) {
      e.preventDefault();

       await this.$axios
            .get("/api/provinsi")
      .then((response) => {
        console.log("masuk");
        //assign response ke state "posts"
        this.posts = response.data.data;
        console.log(this.posts);
      })
      .catch((error) => {
        console.log("error");
        // console.log(error.response.data);
      });

      // //send data ke Rest API
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


<style scoped>
.main-wrapper-1 .section .section-header {
  margin-left: -30px;
  margin-right: -30px;
  margin-top: -10px;
  border-radius: 0;
  border-top: 1px solid #f9f9f9;
  padding-left: 35px;
  padding-right: 35px;
}
</style>
