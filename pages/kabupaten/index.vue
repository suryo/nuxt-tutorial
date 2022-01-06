<template>
  <section class="section">
    <div class>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4>Kabupaten</h4>
              <a href="/kabupaten/add/" class="btn btn-primary">add</a>

              <div class="card-header-form">
                <form>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <div class="input-group-btn">
                      <button class="btn btn-primary">Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-striped">
                  <tr>
                    <th>Id</th>
                    <th>Provinsi</th>
                    <th>Kabupaten</th>
                    <th>Action</th>
                  </tr>
                  <tr v-for="(post, i) in posts" :key="i">
                    <td>{{ posts[i].id }}</td>
                    <td>{{ posts[i].provinsi }}</td>
                    <td>{{ posts[i].kabupaten }}</td>

                    <td>
                      <div class="buttons">
                        <nuxt-link
                          class="btn btn-info"
                          :to="`/kabupaten/edit/${posts[i].id}`"
                          >EDIT</nuxt-link
                        >

                        <button
                          type="button"
                          class="btn btn-danger"
                          size="sm"
                          @click="deleteKabupaten(posts[i], i)"
                        >
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                </table>
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
      features: [
        {
          icon: "arrange-bring-to-front",
          title: "Public",
          content: `<span>No other internal dependency</span>`,
          link: "/public",
        },

        {
          icon: "github-circle",
          title: "Refview",
          content: `<span>Open source on <a href="https://github.com/buefy/buefy"> GitHub</a></span>`,
          link: "/refview",
        },
        {
          icon: "cellphone-link",
          title: "Advanced Search",
          content: `<span><b class="has-text-grey">Every</b> component is responsive</span>`,
          link: "/coach",
        },
      ],
      posts: [],
      sales: [
        [{ Year: 2018 }, { Year: 2018 }],
        [{ Year: 2017 }, { Year: 2017 }],
      ],
    };
  },

  mounted() {
    console.log("test");
    //fething ke Rest API
    this.$axios
      .get("/api/kabupaten")
      .then((response) => {
        //assign response ke state "posts"
        this.posts = response.data.data;
        console.log(this.posts);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },

  methods: {
    async deleteProvinsi(posts, i) {
      //delete data post by ID
      console.log(i);
      await this.$axios.delete(`api/provinsi/${posts.id}`).then(() => {
        //   //remove item array by index
        this.posts.splice(i, 1);
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
