<template>
  <b-container class="mt-1">
    <main-header></main-header>
    <main-navs></main-navs>
    <nuxt />

    <main-footer class=""></main-footer>
  </b-container>
</template>

<script>
import MainHeader from "~/components/school/MainHeader";
import MainFooter from "~/components/school/MainFooter";
import MainNavs from "~/components/school/MainNavs";
import MainContent from "~/components/school/MainContent";

export default {
  components: {
    MainFooter,
    MainNavs,
    MainHeader,
  },
};
</script>

<style></style>
