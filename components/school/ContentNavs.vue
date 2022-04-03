<template>
  <section>
    <content-tabs
      :tabList="['Calendar', 'Rosters', 'Scores and Standings']"
    ></content-tabs>
  </section>
</template>

<script>
import ContentTabs from "~/components/design-system/Tabs";

export default {
  components: {
    ContentTabs,
  },
};
</script>

<style></style>
