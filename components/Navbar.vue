<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">
          <img
            src="https://rschoolstats.com/img/logo4.png"
            width="112"
            height="28"
          />
        </NuxtLink>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a
            target="_blank"
            class="navbar-item"
            href="https://asapidocs.netlify.com"
            >API Docs</a
          >

          <nuxt-link class="navbar-item" to="/rosters">Rosters</nuxt-link>
        </div>

        <div class="navbar-end">
          <div
            class="navbar-item has-dropdown is-hoverable"
            v-if="$auth.loggedIn"
          >
            <a class="navbar-link">
              <figure class="image is-24x24">
                <img
                  class="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
              &nbsp;username
            </a>

            <div class="navbar-dropdown">
              <NuxtLink class="navbar-item" to="/dashboard">Dashboard</NuxtLink>

              <NuxtLink class="navbar-item" to="/profile">Profile</NuxtLink>
              <a class="navbar-item" @click="$auth.logout()">Logout</a>
            </div>
          </div>

          <div class="navbar-item" v-else>
            <div class="buttons">
              <NuxtLink class="navbar-item button is-light" to="/login"
                >Login</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>
