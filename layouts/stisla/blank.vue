<template>
  <section>
    <div id="app">
      <div class="main-wrapper">
        <nuxt />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "/stisla/js/jquery-3.3.1.min.js"
        },
        {
          src: "/stisla/js/popper.min.js"
        },
        {
          src: "/stisla/js/bootstrap.min.js"
        },
        {
          src: "/stisla/js/jquery.nicescroll.min.js"
        },
        {
          src: "/stisla/js/moment.min.js"
        },
        {
          src: "/stisla/js/stisla.js"
        },
        {
          src: "/stisla/js/scripts.js"
        },
        {
          src: "/stisla/js/custom.js"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "/stisla/css/bootstrap.min.css"
        },
        { rel: "stylesheet", href: "/stisla/css/style.css" },
        { rel: "stylesheet", href: "/stisla/css/components.css" }
      ]
    };
  }
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
