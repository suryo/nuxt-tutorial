<template>
  <section>
    <nuxt />
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          //src: "https://snippets.dwebsite.com/uxpin/main.js"
        },
      ],
      link: [
        { rel: "stylesheet", href: "https://snippets.dwebsite.com/uxpin/main.css" },
      ]
    };
  }
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
