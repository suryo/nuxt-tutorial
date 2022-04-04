<template>
  <div></div>
</template>
<script>
// import security from "~/modules/security/mixins/security";
export default {
  layout: "blank",
  // mixins: [security],
  mounted() {
    // localStorage.removeItem('id');
    // localStorage.removeItem('username');
    localStorage.clear();
    this.$router.push({
              name: "index",
            });
    // this.logout();
  },
};
</script>
