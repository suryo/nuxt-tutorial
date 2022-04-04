<template>
  <b-container class="mt-1">
    <main-navs></main-navs>
    <div>&nbsp; </div>
    <main-header></main-header>
    <nuxt />
    <main-footer></main-footer>
  </b-container>
</template>

<script>
import MainHeader from "~/components/conference/MainHeader";
import MainFooter from "~/components/conference/MainFooter";
import MainNavs from "~/components/conference/MainNavs";
import MainContent from "~/components/conference/MainContent";

export default {
  components: {
    MainHeader,
    MainFooter,
    MainNavs,
  },
};
</script>

<style></style>
