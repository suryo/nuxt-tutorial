<template>
  <section class="as-table-content">
    <table-base>
      <div class="as-table-content table-responsive">
        <table class="records_list table table-as">
          <thead class="text-center">
            <tr>
              <th class="">Edit</th>
              <th class="" style="width: 50%">Activity</th>
              <th class="">Last Modified</th>

              <th class="">Publish</th>
              <th class="">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="index" v-for="(roster, index) in rosters">
              <td class="llink" bgcolor="FFFFFF" align="center">
                <as-button
                  variant="secondary"
                  value="Edit"
                  @click.native="
                    edit(
                      roster.id,
                      roster.agl,
                      roster.name,
                      roster.low_school_id
                    )
                  "
                  >Edit</as-button
                >
              </td>
              <td class="bcopy" bgcolor="FFFFFF">
                {{ roster.activity }} {{ roster.gender_name }}
                {{ roster.level }}
                {{ roster.school_name }}
              </td>
              <template v-if="selectedSy == active_schoolyear">
                <td class="bcopy" bgcolor="FFFFFF" align="center">
                  {{ roster.date_modified }}
                </td>
              </template>
              <template v-else>
                <td class="bcopy" bgcolor="FFFFFF" align="center"></td>
              </template>

              <td class="bcopy" bgcolor="FFFFFF" align="center">
                <template>
                  <div class="flex content-center">
                    <as-radio
                      label="Yes"
                      :name="index"
                      :checked="roster.display_flag == 'yes'"
                      value="1"
                      :disabled="roster.date_modified == '- -'"
                     
                    />
                    <as-radio
                      label="No"
                      :name="index"
                      :checked="roster.display_flag == 'no'"
                      :disabled="roster.date_modified == '- -'"
                      value="0"
                      
                    />
                  </div>
                </template>
              </td>
              <td bgcolor="FFFFFF" align="center">
                <template v-if="selectedSy == active_schoolyear">
                  <template v-if="roster.id == null">
                    <as-checkbox
                      :inputValue="roster.agl + index"
                      v-model="roster_ids"
                      @change.native="checkboxChanged"
                    />
                  </template>
                  <template v-else>
                    <as-checkbox
                      :inputValue="roster.id"
                      v-model="roster_ids"
                      @change.native="checkboxChanged"
                    />
                  </template>
                  <input type="hidden" name="ffPaid2112" value />
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </table-base>
  </section>
</template>

<script>
import AsRadio from "~/components/design-system/Radio/AsRadio";
export default {
  layout: "blank",
  components: {
    AsRadio,
  },
  data() {
    return {
      value: [],
      rosters: [
        { activity: "A", display_flag: "no" , date_modified:"03-21-22"},
        { activity: "B", display_flag: "yes" , date_modified:"- -"},
        { activity: "C", display_flag: "no" , date_modified:"03-21-22"},
        { activity: "D", display_flag: "yes" , date_modified:"03-21-22"},
        { activity: "E", display_flag: "yes" , date_modified:"03-21-22"},
        { activity: "F", display_flag: "no" , date_modified:"03-21-22"},
      ],
    };
  },
  props: {
    selectedSy: String,
    active_schoolyear: String,
  },
  computed: {
    getRosterId() {
      return this.$store.state.rosters.data;
    },
  },

  methods: {
    checkboxChanged() {
      this.$emit("checkboxChanged", this.roster_ids);
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #6777ef;
$secondary: #34395e;
$active: #68d391;

.button {
  height: 40px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all ease-in-out 0.2s;

  &:disabled {
    cursor: not-allowed;
    background-color: darken(white, 25);
    color: #000;
    &:hover {
      background-color: darken(white, 25);
      color: #000;
    }
  }

  &:hover {
    background-color: darken(white, 10);
  }

  &:active {
    background-color: darken(white, 20);
  }

  &--primary {
    background-color: $primary;
    color: white;

    &:hover,
    &:visited {
      background-color: darken($primary, 10);
    }

    &:active {
      background-color: darken($primary, 20);
    }
  }

  &--danger {
    color: red;
  }
}

.page {
  &-content {
    padding: 2rem;
  }
  &-action {
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.875rem;
  }
}

.toggle {
  &-checkbox {
    transition: all ease-in-out 0.2s;
    height: 100%;
    &:checked {
      right: 0;
      border-color: darken($active, 20);
    }
  }
  &-label {
    transition: all ease-in-out 0.2s;
    &.active {
      background-color: $active;
    }
  }
}

.form {
  &-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    &.column {
      flex-direction: column;
      gap: 0.2rem;
    }
  }
}

.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 40px;
  box-sizing: border-box;
  padding: 0 10px;

  &__tag {
    height: 20px;
    float: left;
    margin-right: 10px;
    background-color: #eee;
    line-height: 20px;
    padding: 0 5px;
    border-radius: 5px;
    margin: 10px 5px;
    span {
      cursor: pointer;
      opacity: 0.75;
    }
  }

  &__text {
    border: none;
    outline: none;
    font-size: 0.9em;
    line-height: 50px;
    background: none;
  }
}

select,
input {
  height: 40px;
}

.table {
  width: 100%;
  display: table;
  thead {
    background-color: darken($color: white, $amount: 10);
    height: 40px;
  }
  tbody {
    min-height: 50px;
  }
  th {
    border: 1px solid darken(white, 10);
  }
  td {
    padding: 0.5rem 1rem;
    border: 1px solid darken(white, 10);

    &.action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

