<template>
  <section>
    <div id="app">
      <div class="main-wrapper">
        <navbar />
        <sidebar />

        <!-- Main Content -->
        <div class="main-content">
          <section class="section">
            <!-- <div class="section-header">
              <h1>Dashboardd</h1>
            </div> -->

            <nuxt />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import navbar from "~/layouts/stisla/components/navbar";
import sidebar from "~/layouts/stisla/components/sidebar";

export default {
  head() {
    return {
      script: [
        {
          src: "/stisla/js/jquery-3.3.1.min.js",
        },
        {
          src: "/stisla/js/popper.min.js",
        },
        {
          src: "/stisla/js/bootstrap.min.js",
        },
        {
          src: "/stisla/js/jquery.nicescroll.min.js",
        },
        {
          src: "/stisla/js/moment.min.js",
        },
        {
          src: "/stisla/js/stisla.js",
        },
        {
          src: "/stisla/js/scripts.js",
        },
        {
          src: "/stisla/js/custom.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "/stisla/css/bootstrap.min.css",
        },
        { rel: "stylesheet", href: "/stisla/css/style.css" },
        { rel: "stylesheet", href: "/stisla/css/components.css" },
      ],
    };
  },
  components: {
    navbar,
    sidebar,
  },
  methods: {
    async logout() {
      this.$router.push("/logout");
    },
  },
};
</script>

<style scoped>
.main-content {
  padding-top: 60px;
  min-height: 800px;
}

.section {
  padding: 1rem 1rem;
}
</style>
