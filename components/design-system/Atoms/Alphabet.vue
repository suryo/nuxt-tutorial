<template>
  <div class="as-alpha-filter">
    <ul class="list-unstyled clearfix">
      <li class="show-all"><span>Show All</span></li>
      <li
        :class="{ selected: alpha == currentAlpha }"
        v-for="(alpha, index) in alphabet"
        :key="index"
      >
        <a href="#" v-on:click.prevent="onChangeAlphabet(alpha)">{{ alpha }}</a>
      </li>
      <li><a href="#">#</a></li>
      <li class="show-all"><a href="#">Show All</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentAlpha: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  methods: {
    onChangeAlphabet(alpha) {
      this.$emit("alphachanged", alpha);
    },
  },
};
</script>

<style scoped>
.as-alpha-filter ul {
  display: table;
  margin: 20px 0;
}
.as-alpha-filter ul li {
  float: left;
  width: 36px;
  height: 36px;
  margin-bottom: -1px;
  margin-left: -1px;
  border: 1px solid #e5e5e5;
  font-size: 14px;
}
.as-alpha-filter ul li.show-all {
  width: auto;
  font-size: 12px;
}
.as-alpha-filter ul li.show-all span {
  padding: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-weight: 700;
}
.as-alpha-filter ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #333333;
  background-color: #fafafa;
}
.as-alpha-filter ul li a:hover {
  background-color: #ffffff;
  text-decoration: none;
}
.as-alpha-filter ul li.show-all a {
  padding: 0 10px;
}
.as-alpha-filter ul li.selected a {
  background-color: #ffffff;
  font-weight: bold;
  color: white;
  background-color: #125789;
}
</style>
