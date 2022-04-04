<template>
  <section>
    <b-navbar toggleable="lg" type="dark" variant="primary" sticky>
      <b-navbar-brand href="#" class="bg-transparent shadow-none">
        <h1
          class="font-black text-1xl text-white hover:no-underline focus:no-underline"
        >
          <NuxtLink
            to="/design-system/"
            class="hover:no-underline focus:no-underline hover:text-white"
          >
            <fa-icon :icon="['fas', 'layer-group']" class="mr-1" /> AS Design
            System <sup class="text-1xl">v0.0.1</sup></NuxtLink
          >
        </h1></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="ml-28 sm:ml-0">
        <b-navbar-nav>
          <b-nav-item
            ><NuxtLink
              to="/design-system/patterns"
              class="hover:no-underline focus:no-underline hover:text-white"
            >
              Patterns
            </NuxtLink></b-nav-item
          >

          <b-nav-item
            ><NuxtLink
              to="/design-system/colors"
              class="hover:no-underline focus:no-underline hover:text-white"
            >
              Colors
            </NuxtLink></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Resources" right>
            <b-dropdown-item
              target="_blank"
              href="https://mabeta.dwebsite.com/project/snippet-new/index.html"
              >MA Design System</b-dropdown-item
            >
            <b-dropdown-item
              target="_blank"
              href="https://mabeta.dwebsite.com/project/as-coach-module/coaches-setup-eligibility.html#"
              >AS Coach Module</b-dropdown-item
            >
            <b-dropdown-item
              target="_blank"
              href="https://mabeta.dwebsite.com/project/as-roster-module/roster-list.html"
              >AS Roster Module</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid>
      <div class="row">
        <Sidebar class="bg-blue-600 overflow-auto ml-0 mt-3" />

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 ml-0">
          <div class="mt-0">
            <nuxt />
          </div>
        </main>
      </div>
    </b-container>
  </section>
</template>

<script>
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

import Sidebar from "~/components/layouts/design-system/Sidebar";
import { sidebarMenu } from "~/components/layouts/design-system/mixins";
export default {
  head() {
    return {
      title: "AS - Design System",
    };
  },
  layout: "blank",
  auth: false,
  components: {
    Sidebar,
  },
  mounted() {
    sidebarMenu();
  },
};
</script>

<style lang="scss">
body {
  font-size: 0.875rem;
}

.page-header {
  background: #f4f6f9;
  padding: 20px;
  border-radius: 10px;
}

.navbar {
  background: #954890 !important;

  .nav-link {
    padding: 10px 15px;
    font-size: 12px;
    font-weight: 600;
  }

  #nav-collapse .nuxt-link-active {
    color: white;
    background: #0b4672;
    padding: 10px 15px;
    border-radius: 5px;
  }

  .bg-primary {
    background: #125789 !important;
  }
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
</style>
