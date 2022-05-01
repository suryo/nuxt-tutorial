<template>
  <div :class="{ 'as-radio__inline': !horizontal }">
    <label
      :class="{
        'radio-container': true,
        'd-block': horizontal,
        disabled: disabled,
      }"
      >{{ label }}

      <input
        type="radio"
        :name="name"
        :checked="isChecked"
        :value="value"
        :disabled="disabled"
        @change="$emit('change', $event.target.value)"
        v-on="listeners"
        v-bind="$attrs"
      />

      <span
        :class="{
          shade: true,
          disabled: disabled,
        }"
      ></span>
    </label>
  </div>
</template>

<script>
import { NAME_FORM_RADIO } from "~/components/design-system/constants/components.js";

export default {
  name: "AsRadio",
  model: {
    prop: "checkedValue",
    event: "change",
  },
  props: {
    name: { default: "" },
    inputValue: String,
    checkedValue: { default: "" },
    checked: { default: false },
    value: { default: "" },
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
    return {};
  },
  watch: {
    value: function (newValue) {
      this.inputValue = newValue;
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          this.$emit("input", event.target.value);
        },
        change: (event) => {
          console.log("Change event says...");
          console.log(event.target.value);

          this.$emit("change", event.target.value);
        },
      };
    },
    checkedValues: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    isChecked() {
      console.log(this.checked);
      if (this.checked == true) return true;
      return this.checkedValue == this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
/***************************************************************
*  RADIO
***************************************************************/
.radio-title {
  color: var(--color-gray1);
  font-size: 14px;
  padding-right: 16px;
  font-family: var(--fontFamily1);
  text-align: left;
}
fieldset.uxpin.vertical {
  text-align: left;
}
.uxpin.vertical .radio-container {
  display: block;
}
.radio-container {
  /* Customize the label (the container) */
  position: relative;
  padding-left: 22px;
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
  margin-right: 18px;

  :checked {
    .disabled {
      background-color: var(--color-grey);
    }
  }
}

.radio-container input {
  /* Hide the browser's default checkbox */
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.shade {
  /* Create a custom radio button */
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid coral;
  background-color: var(--color-white);
  background-size: cover;
  border-radius: 50%;
}

.radio-container:hover input ~ .shade {
  /* On mouse-over*/
}

.radio-container input:checked ~ .shade {
  /* When the radio button is checked */
  background-color: coral;
}
.shade:after {
  /* Create the indicator (the dot/circle - hidden when not checked) */
  content: "";
  position: absolute;
  display: none;
}

.radio-container input:checked ~ .shade:after {
  /* Show the indicator (dot/circle) when checked */
  display: block;
}

.radio-container .shade:after {
  /* Style the indicator (dot/circle) */
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
/* --- NEW style radio button --- */
.radio-wrapper {
  position: relative;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  display: inline-block;
}
.radio-wrapper .styled-radio + label {
  margin: 0;
  font-size: 14px;
  cursor: pointer;
  color: var(--color-gray1);
  position: relative;
  padding-left: 22px;
  line-height: 1rem;
}
.radio-wrapper .styled-radio:checked,
.radio-wrapper .styled-radio:not(:checked) {
  position: absolute;
  left: -9999px;
  opacity: 0;
  cursor: pointer;
}
/* Create a custom radio button */
.radio-wrapper .styled-radio:checked + label:before,
.radio-wrapper .styled-radio:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
  border: 1px solid coral;
  border-radius: 100%;
  background: var(--color-white);
}
/* Style the indicator (dot) */
.radio-wrapper .styled-radio:checked + label:after,
.radio-wrapper .styled-radio:not(:checked) + label:after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  background: var(--color-white);
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.radio-wrapper .styled-radio:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
/* When the radio button is checked */
.radio-wrapper .styled-radio:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.radio-wrapper .styled-radio:checked + label:before {
  background-color: coral;
}
fieldset.uxpin.vertical .radio-wrapper,
fieldset.uxpin.vertical .radio-title {
  display: block;
}

.disabled {
  color: #c6c6c6;
  cursor: not-allowed;
}

.shade {
  border: solid 1px #c6c6c6;
  background-color: none;

  &.disabled {
    &input:checked {
      background-color: red;
    }
  }
}

.radio-container input:checked:disabled ~ .shade[data-v-115ce200] {
  border: solid 1px #c6c6c6;
  background-color: #c6c6c6;
}
</style>
