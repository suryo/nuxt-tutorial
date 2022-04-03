<template>
  <section>
    <vue-select v-on="$listeners" v-bind="{ ...$props, ...$attrs }">
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"
        ><slot :name="slot" v-bind="scope"
      /></template>
    </vue-select>
  </section>
</template>

<script>
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    VueSelect,
  },
};
</script>

<style scoped>
/* form control */
.form-select .vs__dropdown-toggle {
  border: 1px solid #e5e5e5;
  background-color: #fafafa;
  color: #333333;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  height: 32px;
}
.form-select .vs__dropdown-menu {
  border: 1px solid #e5e5e5;
  top: 100%;
}
.form-select.vs--loading .vs__selected,
.form-select.vs--open .vs__selected {
  opacity: 1;
}
</style>
