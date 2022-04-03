<template>
  <div id="content">
    <b-container>
      <app-tabs class="" :tabList="['Rosters']" :bordered="false">
        <template v-slot:tabPanel-1>
          <b-overlay
            :show="isLoading"
            rounded="sm"
            spinner-variant="primary"
            opacity="0.95"
          >
            <nuxt />
          </b-overlay>
        </template>
      </app-tabs>
    </b-container>
  </div>
</template>

<script>
import AppTabs from "~/components/design-system/Tabs";

export default {
  components: {
    AppTabs,
  },
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
    isLoading() {
      return this.$store.state.helpers.isLoading;
    },
  },
};
</script>

<style>
body {
  background: #f2f7fa;
}

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
