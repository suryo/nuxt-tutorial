<template>
  <section>
    <nuxt />
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [],
      link: [
        { rel: "stylesheet", href: "/as3/css/genie.css" }
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
