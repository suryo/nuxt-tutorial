<template>
  <b-button :variant="variant" :size="size" :disabled="disabled"
    ><slot></slot
  ></b-button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 6px 9px;
  font-size: 12px;
  margin: 5px 0;
  font-family: "Open Sans", sans-serif;
}
.btn:focus,
.btn:active {
  box-shadow: none;
  outline: none;
}
.btn-primary {
  color: #fff;
  font-weight: 600;
  text-align: center;
  background-color: #005a86;
  border-color: #005a86;
  border-radius: 5px;
}
.btn-primary:hover,
.btn-primary:focus {
  background-color: #0b4672;
  border-color: #0b4672;
}
.btn-secondary {
  color: #333;
  font-weight: 600;
  text-align: center;
  background-color: #fff;
  border-color: #e5e5e5;
  border-radius: 5px;
}
.btn-secondary:hover,
.btn-secondary:focus {
  background-color: #f5f5f5;
  border-color: #e5e5e5;
  color: #333;
}
.btn-danger {
  color: #fff;
  font-weight: 600;
  text-align: center;
  background-color: #a3372e;
  border-color: #a3372e;
  border-radius: 5px;
}
.btn-danger:hover,
.btn-danger:focus {
  background-color: #c13834;
  border-color: #c13834;
  color: #fff;
}
.btn.disabled,
.btn:disabled,
.btn-primary.disabled, 
.btn-primary:disabled,
.btn-secondary.disabled,
.btn-secondary:disabled {
  cursor: not-allowed;
}
.btn.disabled,
.btn:disabled,
.btn.disabled:hover,
.btn.disabled:focus,
.btn:disabled:hover,
.btn-primary.disabled,
.btn-primary:disabled,
.btn-primary.disabled:hover,
.btn-primary.disabled:focus,
.btn-primary:disabled:hover,
.btn-secondary.disabled,
.btn-secondary:disabled,
.btn-secondary.disabled:hover,
.btn-secondary.disabled:focus,
.btn-secondary:disabled:hover {
  background-color: #6c757d;
  color: #fff;
  border-color: #6c757d;
}
.btn-sm {
  font-size: 11px;
  padding: 4px 8px;
}
.btn-lg {
  font-size: 14px;
  padding: 8px 16px;
}
@media (max-width: 425px) {
  .btn {
    display: block;
    width: 100%;
  }
}
/* Button Group */
.btn-group {
  display: block;
  margin: 0 -5px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn,
.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) > .btn {
  border-radius: 5px;
}
.btn-group .btn {
  margin: 5px;
}
/* Button Prepend */
.input-group-append .btn {
  margin: 0;
}
/* Button Rounded */
.btn-pill {
  border-radius: 50%;
}
/* Button Outline */ 
.btn-outline-primary {
  color: #005a86;
  border-color: #005a86;
}
.btn-outline-primary:hover,
.btn-outline-primary:focus {
  background-color: #005a86;
  color: #fff;
}
</style>
