<template>
  <div
    :class="[
      { 'as-tabcontent__inline': variant === 'horizontal' },
      getTabSize,
      getBorderStatus
    ]"
  >
    <ul
      class="as-nav__tab"
      :class="{
        'as-tab__block': variant === 'horizontal',
        '': variant === 'vertical'
      }"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="nav-link"
        :class="{
          active: index + 1 === activeTab,
          '': index + 1 !== activeTab
        }"
      >
        <label :for="`${_uid}${index}`" v-text="tab" />
        <input
          :id="`${_uid}${index}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          v-model="activeTab"
          class="hidden"
        />
      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class="as-tab__content"
        :class="{
          'flex-1': variant === 'horizontal'
        }"
      >
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    tabList: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: "md"
    },
    variant: {
      type: String,
      required: false,
      default: () => "vertical",
      validator: value => ["horizontal", "vertical"].includes(value)
    }
  },
  computed: {
    getTabActiveStatus() {
      return this.respond === "responseFound" ? "btn-yellow" : "btn-default";
    },
    getTabSize() {
      let className = "size-medium";

      switch (this.size) {
        case "large":
          className = "size-large";
          break;
        case "small":
          className = "size-small";
          break;
        default:
          className = "size-medium";
      }
      return className;
    },
    getTabVariant() {
      return this.variant === "horizontal" ? "horizontal" : "vertical";
    },
    getBorderStatus() {
      return this.bordered === false ? "no-border" : "";
    }
  },
  data() {
    return {
      activeTab: 1
    };
  }
};
</script>

<style scoped lang="scss" src="~/assets/design-system/css/tabs.scss"></style>
