<template>
  <div id="content">
    <div id="inner_nav">
      <ul>
        <li class="selected">
          <nuxt-link to="/rosters"><span>Rosters</span></nuxt-link>
        </li>
      </ul>
    </div>
    <div id="inner_contentwrapper" style="_width: 100%; _padding-top: 3px">
      <div id="inner_content" style="_width: 100%; padding: 20px">
        <b-overlay :show="isLoading" no-center rounded="sm">
          <nuxt />
        </b-overlay>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [],
      link: [
        { rel: "stylesheet", href: "/as3/css/common.css" },
        { rel: "stylesheet", href: "/as3/css/style.css" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
        },
      ],
    };
  },
  computed: {
    isLoading(){
      return this.$store.state.helpers.isLoading
    }
  },
};
</script>

<style>
.subhead {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: 696955;
}

.bcopy {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-weight: normal;
  text-transform: none;
  color: 000000;
}

.llink {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-weight: bold;
  text-transform: none;
  text-decoration: none;
  color: FFFFFF;
}
#content {
  margin: 20px auto;
}
</style>
