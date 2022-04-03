<template>
  <section class="page-header">
    <div class="text-xs mb-0">
      <slot name="breadcrumbs">{{ breadcrumb }}</slot>
    </div>
    <h1 class="text-3xl font-bold mt-2" id="title">
      <slot name="title">{{ title }}</slot>
    </h1>
    <h1 class="text-lg font-normal mt-2">
      <slot name="subtitle"> {{ subtitle }}</slot>
    </h1>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    breadcrumb: {
      type: Object,
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>
<style
  scoped
  lang="scss"
  src="~/assets/design-system/css/page-header.scss"
></style>
