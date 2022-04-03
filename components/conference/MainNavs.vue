<template>
  <section>
    <div class="max-width-wrapper">
      <div id="navigation">
        <nav class="navbar navbar-expand-lg navbar-dark static-top">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="header_button nav-link" href="#">
                  <span>Conference Calendar</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Directory</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Ticket Info</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Maps</span>
                </a>
              </li>
              <li class="nav-item">
                <NuxtLink class="header_button nav-link" to="/school/1_1"
                  >Member Schools</NuxtLink
                >
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Help</span>
                </a>
              </li>
            </ul>
          </div>

          <b-navbar-nav class="ml-auto">
            <nuxt-link to="/admin/login">
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="submit"
                variant="primary"
                >Login</b-button
              >
            </nuxt-link>
          </b-navbar-nav>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
