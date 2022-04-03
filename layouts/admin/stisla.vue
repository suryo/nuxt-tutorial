<template>
  <section>
    <div id="app">
      <div class="main-wrapper">
        <div class="navbar-bg"></div>
        <nav class="navbar navbar-expand-lg main-navbar">
          <form class="form-inline mr-auto">
            <ul class="navbar-nav mr-3">
              <li>
                <a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"
                  ><i class="fas fa-bars"></i
                ></a>
              </li>
            </ul>
          </form>
        </nav>
        <div class="main-sidebar">
          <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
              <nuxt-link to="/dashboard">AS6</nuxt-link>
            </div>
            <div class="sidebar-brand sidebar-brand-sm">
              <a href="index.html">AS6</a>
            </div>
            <ul class="sidebar-menu">
              <li class="menu-header">Starter</li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"
                  ><i class="fas fa-columns"></i> <span>Example</span></a
                >
                <ul class="dropdown-menu">
                  <li>
                    <nuxt-link class="nav-link" to="/example/export">
                      export
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li>
                <nuxt-link class="nav-link" to="/rosters/"
                  ><i class="far fa-fb"></i> <span>Rosters</span></nuxt-link
                >
              </li>
            </ul>
          </aside>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <section class="section">
            <div class="section-header">
              <h1>Dashboard</h1>
            </div>

            <nuxt />
          </section>
        </div>
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
          href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
        },
        {
          rel: "stylesheet",
          href: "/stisla/css/bootstrap.min.css",
        },
        { rel: "stylesheet", href: "/stisla/css/style.css" },
        { rel: "stylesheet", href: "/stisla/css/components.css" },
      ],
    };
  },
  components: {},
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>

<style scoped>
.main-content {
  padding-top: 60px;
}

.section {
  padding: 1rem 1rem;
}

.navbar-bg {
  background: #125789;
}

.navbar {
  height: 70px;
  left: 250px;
  right: 5px;
  position: absolute;
  z-index: 890;
  background-color: transparent;
}
</style>
