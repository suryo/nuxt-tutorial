<template>
  <div>
    <section v-if="error.statusCode === 404">
      <NotFound />
    </section>

    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
import NotFound from "~/themes/tailwind/components/404";
export default {
  props: ["error"],
  components: { NotFound },
  layout: "blank"
};
</script>
