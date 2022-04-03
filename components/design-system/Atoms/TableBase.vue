<template>
  <section>
    <slot>
      <table class="table">
        <thead>
          <tr>
            <th v-for="item in header" :key="item.title">{{ item.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row">
            <td v-for="item in row" :key="item">{{ item }}</td>
          </tr>
        </tbody>
      </table>
    </slot>
  </section>
</template>

<script>
export default {
  name: "TableBase",
  props: {
    header: {
      type: Array,
    },
    rows: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
