<template>
  <label
    :class="{
      'checkbox-container': true,
      disabled: disabled,
      'text-danger': hasError,
    }"
  >
    <span class="" v-if="labelLeft && hideLabel == false">{{ label }}</span>

    <input
      type="checkbox"
      v-model="checkedValues"
      :value="inputValue"
      :disabled="disabled"
    />

    <span
      :class="{
        checkmark: true,
        disabled: disabled,
        'text-danger': hasError,
      }"
    ></span>

    <span
      class=""
      v-if="labelRight && hideLabel == false && labelLeft == false"
      >{{ label }}</span
    >

    <span class="slot">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { find } from "lodash";
import defaultVue from "../../../layouts/default.vue";

export default {
  name: "AsCheckbox",
  props: {
    inputValue: String,
    value: { default: "" },
    props: {
      modelValue: String,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
    labelLeft: {
      type: Boolean,
      default: false,
    },
    labelRight: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
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
      checked: false,
      checkedValue: "",
      hasError: false,
      options: {
        default: [],
      },
    };
  },

  methods: {
    change(event) {
      this.checked = event.target.value;
      this.$emit("change", this.checked);
    },
  },

  computed: {
    checkedValues: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
/***************************************************************
*  CHECKBOX
***************************************************************/

/* checkbox */
.checkbox-container {
  display: flex;

  align-items: center;
  justify-content: center;

  &.disabled {
    cursor: not-allowed;
    .checkmark {
      background-color: #c6c6c6;
    }
    .slot {
      color: #c6c6c6;
    }
  }

  input {
    border-color: #e5e5e5;
    border-radius: 2px;
    &:hover {
      &:disabled {
        cursor: not-allowed;
      }
    }

    &:disabled {
      cursor: not-allowed !important;
    }
  }

  .checkmark {
    border: solid 1px #e5e5e5;
    border-radius: 4px;
    padding: 10px;
  }

  .slot {
    padding-top: 3px;
    margin-left: 5px;
  }
}

.checkbox-container.checkbox-container-notxt {
  min-height: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px !important;
  margin: 0 auto;
}

fieldset .checkbox-container {
  display: block;
}
fieldset .checkbox-container .city {
  padding-left: 20px;
  display: inline;
}
.checkbox-title {
  color: var(--color-gray1);
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
  display: block;
  text-align: left;
  font-family: var(--fontFamily1);
}
.side-label .radio-title,
.side-label .checkbox-title,
.side-label .col {
  float: left;
  box-sizing: border-box;
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: -ms-fit-content;
}
.side-label .col {
  padding-top: 3px;
  width: auto;
}
.side-label .radio-title,
.side-label .checkbox-title {
  font-weight: normal;
}
.horizontal .checkbox-title {
  float: left;
  margin-right: 22px;
  font-weight: normal;
}
.horizontal .checkbox-container {
  float: left;
  margin-right: 22px;
  margin-top: 3px;
}
.checkbox-container {
  /* Customize the label (the container) */
  position: relative;
  padding-left: 22px !important;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: -ms-fit-content;
  font-family: var(--fontFamily1);
  font-size: 14px;
  color: var(--color-gray1);
  text-decoration: none solid var(--color-gray1);
  line-height: 16px;
}

.checkbox-container input {
  /* Hide the browser's default checkbox */
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  /* Create a custom checkbox */
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-gray6);
  background-color: var(--color-white);
  background-size: cover;
}

.checkbox-container:hover input ~ .checkmark {
  /* On mouse-over*/
}

.checkbox-container input:checked ~ .checkmark {
  /* When the checkbox is checked */
  background-image: url("~assets/design-system/images/checkmark.svg");
  background-color: #135789;
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: center;
  &.disabled {
    background-color: red;
    background-color: #c6c6c6;
  }
}
/* NEW STYLE CHECKBOX */
.checkbox-wrapper {
  position: relative;
  margin-bottom: 0.5rem;
  display: inline-block;
}
.checkbox-wrapper .styled-checkbox {
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
}
.checkbox-wrapper .styled-checkbox + label {
  position: relative;
  cursor: pointer;
  line-height: 1rem;
  padding: 0;
  padding-left: 22px;
  margin: 0;
}
.checkbox-wrapper .styled-checkbox + label.no-label {
  height: 10px;
}
.checkbox-wrapper .styled-checkbox + label:before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-gray6);
}
.checkbox-wrapper .styled-checkbox:checked + label:before {
  background: #135789;
  border-color: #135789;
}
.checkbox-wrapper .styled-checkbox:disabled + label {
  color: #adadad;
  cursor: auto;
}
.checkbox-wrapper .styled-checkbox:disabled + label:before {
  box-shadow: none;
  background: #ddd;
}
.checkbox-wrapper .styled-checkbox:checked + label:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 16px;
  height: 16px;
  background-image: url("~assets/design-system/images/checkmark.svg");
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: center;
}
/* fieldset column */
fieldset.fieldset-grouping .checkbox-title,
fieldset.fieldset-grouping .radio-title {
  float: left;
  margin-right: 1rem;
  padding: 0;
  font-weight: normal;
}
fieldset.fieldset-grouping .col {
  padding: 0;
  float: left;
  width: auto;
}
fieldset .checkbox-wrapper {
  display: block;
}
fieldset.uxpin.horizontal .checkbox-wrapper {
  margin-right: 1.5rem;
  float: left;
}
</style>
