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
              <li class="nav-item">
                <NuxtLink to="/" class="header_button nav-link">
                  <span>Conference Page</span></NuxtLink
                >
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Calendar</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Rosters</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Scores and Standings</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Coaches</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Minor School Leagues</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Our Conference Partners</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Our School Partners</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="header_button nav-link" href="#">
                  <span>Coop Team Activities</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
