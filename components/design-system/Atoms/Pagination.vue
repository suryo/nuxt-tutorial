<template>
  <div class="as-pagination">
    <ul class="pagination list-unstyled clearfix">
      <li class="pagination-item">
        <a @click="onClickPreviousPage" :disabled="isInFirstPage">
          <fa-icon :icon="['fas', 'chevron-left']" />
          <span class="d-none">Prev</span>
        </a>
      </li>
      <li v-for="page in pages" class="pagination-item" :key="page.name">
        <a
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </a>
      </li>
      <li class="pagination-item">
        <a @click="onClickNextPage" :disabled="isInLastPage">
          <span class="d-none">Next</span>
          <fa-icon :icon="['fas', 'chevron-right']" />
        </a>
      </li>
      <li>
        <div class="pagination-select">
          <span>Goto:</span>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    size: {
      type: String,
      default: "medium",
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style scoped>
.as-pagination ul {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}
.as-pagination ul li {
  font-size: 12px;
  color: #333;
  margin-right: 3px;
}
.as-pagination ul li a {
  border-radius: 100%;
  color: #333;
  padding: 5px 10px;
  min-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
}
.as-pagination ul li a:hover {
  border-color: #fafafa;
  background-color: #fafafa;
  text-decoration: none;
  cursor: pointer;
}
.as-pagination ul li a.active,
.as-pagination ul li a.active:hover {
  border-color: #a4b8cc;
  background-color: #125789;
  font-weight: 700;
  color: white;
}
.as-pagination ul li a svg {
  font-size: 8px;
}
.as-pagination ul li select {
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  margin-left: 5px;
}
.as-pagination ul li .pagination-select {
  margin-left: 8px;
}
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}
</style>
