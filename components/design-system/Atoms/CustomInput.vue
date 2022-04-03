<template>
  <div>
    <div :class="{ 'form-group': !horizontal, 'form-group form-group__inline': horizontal }">
      <label :style="{ ...stylelabel }">
        {{ label }}
      </label>
      <div :class="{ 'form-group__append': append, 'form-group__required': required }">
        <input 
          :style="{ ...styleinput }"
          class="form-control"
          type="text" 
          :name="name" 
          v-model="value" 
        />
        <div v-if="append" class="" :style="{ ...styleappend }">
          <c-button text="Button" type="button" class="btn btn-primary btn-sm">Search</c-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton  from "./Button";
  export default {
    components: {
      CButton
    },
    name: 'CustomInput',
    props: {
      append: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        required: true,
      },
      value: {
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
        default: () => {}
      },
      styleappend: {
        type: Object,
        default: () => {}
      },
      required: {
        type: Boolean,
        default: false
      }
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
        this.$emit('input', event.target.value);
      }
    }
  };
</script>

<style scoped>
/* form group */
.form-group {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}
.form-group > label {
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
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
  border: 1px solid #E5E5E5;
  color: #333333;
  border-radius: 5px;
  height: 30px;
  font-family: 'Open Sans', sans-serif;
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
