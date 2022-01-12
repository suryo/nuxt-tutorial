<template>
  <div>
    <input
      class="form-control"
      type="text"
      v-model="searchQuery"
      placeholder="Searchx"
    />
    <table v-if="resources.length" class="table">
      <thead>
        <tr>
          <th>Resource</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resultQuery" :key="item.uri">
          <td>
            <a v-bind:href="item.uri" target="_blank">{{ item.title }}</a>
          </td>
        </tr>

        <tr>
          <td>
            <!-- v-model="form.spesific_mail[index].activity_type" -->
            <v-select
              class="searchselect"
              v-model="searchSelect"
              label="title"
              :options="resultQuery"
            ></v-select>
          </td>
        </tr>
        <tr>
          <td>
            <!-- v-model="form.spesific_mail[index].activity_type" -->
            <v-select
              class="searchselect"
              label="tag"
              :options="resultSelect"
            ></v-select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
layout: "stisla/default",
  components: {},
  data() {
    return {
      default: [{ id: 0, tag: "pilih provinsi dahulu" }],
      searchQuery: null,
      searchSelect: null,
      tag: null,
      resources: [
        {
          title: "ABE Attendance",
          uri: "aaaa.com",
          category: "a",
          icon: null,
          data: [
            { id: 1, tag: "economy" },
            { id: 3, tag: "bank" },
          ],
        },
        {
          title: "Accounting Services",
          uri: "aaaa.com",
          category: "a",
          icon: null,
          data: [
            { id: 1, tag: "economy" },
            { id: 4, tag: "services" },
          ],
        },
        {
          title: "Administration",
          uri: "aaaa.com",
          category: "a",
          icon: null,
          data: [
            { id: 2, tag: "admin" },
            { id: 3, tag: "bank" },
          ],
        },
        {
          title: "Advanced Student Lookup",
          uri: "bbbb.com",
          category: "b",
          icon: null,
          data: [
            { id: 4, tag: "services" },
            { id: 3, tag: "bank" },
          ],
        },
        {
          title: "Art & Sciences",
          uri: "bbbb.com",
          category: "b",
          icon: null,
          data: [
            { id: 1, tag: "economy" },
            { id: 3, tag: "bank" },
          ],
        },
        {
          title: "Auxiliares Services",
          uri: "bbbb.com",
          category: "b",
          icon: null,
          data: [
            { id: 1, tag: "economy" },
            { id: 3, tag: "bank" },
          ],
        },
        {
          title: "Basic Skills",
          uri: "cccc.com",
          category: "c",
          icon: null,
          data: [
            { id: 1, tag: "economy" },
            { id: 3, tag: "bank" },
          ],
        },
        {
          title: "Board of Trustees",
          uri: "dddd.com",
          category: "d",
          icon: null,
          data: [
            { id: 1, tag: "economy" },
            { id: 3, tag: "bank" },
          ],
        },
      ],
      features: [
        {
          icon: "arrange-bring-to-front",
          title: "Public",
          content: `<span>No other internal dependency</span>`,
          link: "/public",
        },

        {
          icon: "github-circle",
          title: "Refview",
          content: `<span>Open source on <a href="https://github.com/buefy/buefy"> GitHub</a></span>`,
          link: "/refview",
        },
        {
          icon: "cellphone-link",
          title: "Advanced Search",
          content: `<span><b class="has-text-grey">Every</b> component is responsive</span>`,
          link: "/coach",
        },
      ],
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" },
      ],
    };
  },

  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    },

    resultSelect() {
      //this.tag = this.searchSelect.data;
      if (this.searchSelect) {
        return this.searchSelect["data"];
      } else {
        return this.default;
      }
      // if(this.searchSelect){
      // return this.resources.filter((item)=>{
      // return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      // });
      // }else{
      // return this.resources;
      // }
    },
  },
};
</script>

