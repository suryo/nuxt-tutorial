<template>
  <section class="section">
    This is public conference page, anyone can access this page
  </section>
</template>

<script>
export default {
  layout: "conference/default",
  auth: false,
  components: {},
  data() {
    return {};
  },
};
</script>
