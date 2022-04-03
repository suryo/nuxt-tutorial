<template>
  <b-loading
    :is-full-page="isFullPage"
    :active.sync="isLoading"
    :can-cancel="false"
  ></b-loading>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    isFullPage: {
      type: Boolean,
      default: true
    },
    canCancel: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style></style>
