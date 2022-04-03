<template>
  <div :class="{ 'as-radio__inline': !horizontal }">
    <label
      v-for="(option, key) in options"
      :key="key"
      :class="{ 'radio-container': true, 'd-block': horizontal }"
      >{{ option.label
      }}<input
        type="radio"
        :name="name"
        v-model="inputValue"
        :value="option[valAttr]"
        @input="input"
      />
      <span class="shade"></span>
    </label>
  </div>
</template>

<script>
import { find } from "lodash";

export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
    value: {
      default: "",
    },
    name: {
      type: String,
      default: "radio",
    },
    valAttr: {
      type: String,
      default: "value",
    },
    textAttr: {
      type: String,
      default: "text",
    },
    options: {
      default: [],
    },
  },
  data() {
    return {
      inputValue: null,
    };
  },
  mounted() {
    this.inputValue = this.value;
  },
  watch: {
    value: function (newValue) {
      this.inputValue = newValue;
    },
  },
  methods: {
    input(event) {
      this.inputValue = event.target.value;
      this.$emit("input", this.inputValue);
    },
  },
};
</script>

<style scoped>
/* radio button */
.radio-container {
  position: relative;
  padding-left: 22px;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: -ms-fit-content;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #333333;
  line-height: 16px;
  margin-right: 5px;
}
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.shade {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid #125789;
  background-color: #ffffff;
  background-size: cover;
  border-radius: 50%;
}
.radio-container input:checked ~ .shade {
  background-color: #125789;
}
.radio-container .shade:after {
  content: "";
  position: absolute;
  display: none;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.radio-container input:checked ~ .shade:after {
  display: block;
}
/* Radio Vertical */
.as-radio__inline .radio-container {
  margin-right: 1rem;
}
.as-radio__inline .radio-container:last-child {
  margin-right: 0;
}
</style>
