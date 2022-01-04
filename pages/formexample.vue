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
              <div class="form-group">
                <label>Default Input Text</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Phone Number (US Format)</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fas fa-phone"></i>
                    </div>
                  </div>
                  <input type="text" class="form-control phone-number" />
                </div>
              </div>
              <div class="form-group">
                      <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                      <div class="col-sm-12 col-md-7">
                        <button class="btn btn-primary">Publish</button>
                      </div>
                    </div>
              <div class="form-group">
                <label>Password Strength</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fas fa-lock"></i>
                    </div>
                  </div>
                  <input
                    type="password"
                    class="form-control pwstrength"
                    data-indicator="pwindicator"
                  />
                </div>
                <div id="pwindicator" class="pwindicator">
                  <div class="bar"></div>
                  <div class="label"></div>
                </div>
              </div>
              <div class="form-group">
                <label>Currency</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                  </div>
                  <input type="text" class="form-control currency" />
                </div>
              </div>
              <div class="form-group">
                <label>Purchase Code</label>
                <input
                  type="text"
                  class="form-control purchase-code"
                  placeholder="ASDF-GHIJ-KLMN-OPQR"
                />
              </div>
              <div class="form-group">
                <label>Invoice</label>
                <input type="text" class="form-control invoice-input" />
              </div>
              <div class="form-group">
                <label>Date</label>
                <input
                  type="text"
                  class="form-control datemask"
                  placeholder="YYYY/MM/DD"
                />
              </div>
              <div class="form-group">
                <label>Credit Card</label>
                <input type="text" class="form-control creditcard" />
              </div>
              <div class="form-group">
                <label>Tags</label>
                <input type="text" class="form-control inputtags" />
              </div>
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

      //send data ke Rest API
      await this.$axios
        .post("/api/provinsi", {
          //data yang dikirim ke server
          provinsi: this.provinsi.provinsi,
        })
        .then(() => {
          //redirect ke route "post"
          this.$router.push({
            name: "provinsi",
          });
        })
        .catch((error) => {
          //assign validation
          this.validation = error.response.data;
        });
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
