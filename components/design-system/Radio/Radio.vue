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
import * as components from "~/components/design-system/Radio/index";

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
      default: "AsRadio",
    },
    options: {
      type: Array,
    },
    name: { default: "" },
    inputValue: String,
    checkedValue: { default: "" },
    checked: { default: false },
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    valAttr: {
      type: String,
      default: "value",
    },
    textAttr: {
      type: String,
      default: "text",
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
