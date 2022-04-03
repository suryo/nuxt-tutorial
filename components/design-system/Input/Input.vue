<template>
  <div>
    <slot #prefix></slot>
    <input
      :class="{ 'as-input': true, disabled: disabled }"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @keypress="onKeyPress"
      @input="onInput"
    />
    <slot #suffix></slot>
  </div>
</template>

<script>
import defaultVue from "../../../layouts/default.vue";
export default {
  components: {},
  name: "AsInput",
  props: {
    value: String,
    defaultValue: {
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
    },
    append: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    stylelabel: {
      type: Object,
      default: () => {},
    },
    styleinput: {
      type: Object,
      default: () => {},
    },
    styleappend: {
      type: Object,
      default: () => {},
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },
  mounted() {
    console.log(this.stylelabel);
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
    onKeyPress(e) {
      this.$emit("keypress", event.target.value);
    },
  },
};
</script>

<style lang="scss" src="~/assets/design-system/css/_color.scss"></style>
<style lang="scss" scoped>
.as-input {
  padding: 0.375rem 0.75rem;

  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &.disabled {
    cursor: not-allowed;
    background: var(--bg-color-input-disabled);
  }
}

/* form group */
.form-group {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}
.form-group > label {
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}
/* form-control inline */
.form-group__inline {
  display: flex;
  align-items: center;
}
.form-group__inline > label {
  margin-bottom: 0;
  margin-right: 10px;
}
.form-group__inline > div {
  flex: 1%;
}
/* form control */
.form-control {
  border: 1px solid #e5e5e5;
  color: #333333;
  border-radius: 5px;
  height: 30px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}
.form-control:focus,
.form-control:focus-visible {
  outline: none;
  box-shadow: none;
  border: 1px solid #1976ba;
}
/* form append */
.form-group__append {
  display: flex;
  align-items: stretch;
  width: 100%;
}
.form-group__append .form-control {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.form-group__append button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 100%;
  margin: 0;
}
/* form required */
.form-group__required {
  position: relative;
}
.form-group__required::after {
  position: absolute;
  content: "*";
  color: #dc3545;
  font-size: 14px;
  font-weight: 600;
  right: -10px;
  top: 0;
  bottom: 0;
  margin: auto;
}
fieldset.form-group.form-group__required::after {
  right: -9px;
}
@media (max-width: 767px) {
  .form-row.form-group__required::after {
    top: 35px;
    bottom: auto;
  }
}
</style>
