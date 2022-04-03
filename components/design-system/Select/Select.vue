<template>
  <component
    :is="provider"
    :options="options"
    :placeholder="placeholder"
    :multiple="multiple"
    v-model="selected"
    :selected="selected"
    :value="value"
    v-on="$listeners"
    v-bind="{ ...$props, ...$attrs }"
  ></component>
</template>

<script>
import * as components from "~/components/design-system/Select/index";

// High Order Component for AS Select
export default {
  name: "AsSelect",
  components: {
    ...components,
  },
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: " Please select some item",
    },
    provider: {
      type: String,
      default: "VueSelect",
    },
    options: {
      type: Array,
    },
  },
  data() {
    return {
      value: "",
      selected: "",
    };
  },
};
</script>
