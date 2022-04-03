<template>
  <section class="...">
    <div
      class="lg:w-2/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 "
    >
      <div class="w-full z-20 text-black p-60">
        <h1 class="sm:text-2xl text-3xl font-bold text-center tracking-wide">
          <font-awesome-icon :icon="['fas', 'user-shield']" />
          Authenticating
        </h1>

        <p class="text-2xl my-4 sm:text-1xl sm:my-2">
          <b-spinner
            :type="spinner.type"
            :small="spinner.small"
            :variant="spinner.variant"
            class="mr-2 sm:text-sm"
          />
          {{ authenticating_label }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    authenticating_label: {
      type: String,
      default: "Authenticating User, please wait..."
    },
    spinner: {
      type: Object,
      default: function() {
        return {
          variant: "warning",
          type: "border",
          small: true
        };
      }
    }
  },
  computed: {}
};
</script>

<style></style>
