<template>
  <div class="bg-white mx-10 border-2">
    <approval-routing-header label="Set-Up Missing Scores Notification " />
    <div class="page-content form">
      <div class="form-item">
        <label for="toggle" class="text-base text-gray-700"
          >Allow Approval Routing</label
        >
        <div
          class="
            relative
            inline-block
            w-10
            mr-2
            align-middle
            select-none
            transition
            duration-200
            ease-in
          "
        >
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            class="
              toggle-checkbox
              absolute
              block
              w-6
              h-6
              rounded-full
              bg-white
              border-4
              appearance-none
              cursor-pointer
            "
            v-model="form.approval"
          />
          <label
            for="toggle"
            class="
              toggle-label
              block
              overflow-hidden
              h-6
              rounded-full
              bg-gray-300
              cursor-pointer
            "
            :class="form.approval ? 'active' : ''"
          ></label>
        </div>
      </div>

      <div class="form-item column">
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio"
            name="all"
            value="all"
            v-model="form.game_changes"
          />
          <span class="ml-2">Game Changes routes to all approver.</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio"
            name="spesific"
            value="spesific"
            v-model="form.game_changes"
          />
          <span class="ml-2">Game Changes route to specific approver:</span>
        </label>
      </div>

      <div class="form-item column">
        <table class="table">
          <thead>
            <tr>
              <th class="w-16">Delete</th>
              <th class="w-1/5">Activity Type</th>
              <th class="w-1/6">Activity</th>
              <th class="w-1/6">Gender</th>
              <th class="w-1/6">Level</th>
              <th class="w-2/4">Reviewer - Email Address to Route to:</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in form.spesific_mail" :key="index">
              <td class="action">
                <button
                  :disabled="
                    form.spesific_mail.length == 1 && form.spesific_mail[0]
                  "
                  @click="handleRemoveChoice(index)"
                  class="rounded-full border-2 button button--danger"
                >
                  <font-awesome-icon :icon="['fas', 'minus-circle']" />
                </button>
              </td>
              <td>
                <v-select
                  class="searchselect"
                  :clearable="false"
                  v-model="form.spesific_mail[index].activity_type"
                  label="Type"
                  value="id"
                  :options="activityType"
                ></v-select>
              </td>
              <td>
                <v-select
                  class="searchselect"
                  :clearable="false"
                  v-model="form.spesific_mail[index].activity"
                  label="name"
                  value="id"
                  :options="activity"
                ></v-select>
              </td>
              <td>
                <v-select
                  class="searchselect"
                  :clearable="false"
                  v-model="form.spesific_mail[index].gender"
                  label="label"
                  value="id"
                  :options="gender"
                ></v-select>
              </td>

              <td>
                <v-select
                  class="searchselect"
                  :clearable="false"
                  v-model="form.spesific_mail[index].level"
                  label="labellevel"
                  value="id"
                  :options="level"
                ></v-select>
              </td>
              <td>
                <v-select
                  class="searchselect"
                  :clearable="false"
                  v-model="form.spesific_mail[index].reviewer"
                  label="label"
                  value="id"
                  :options="schoolAdmins"
                ></v-select>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          class="border-2 button button--primary"
          @click="handleAddChoice"
        >
          Add Another Choice for this Routing
        </button>
      </div>

      <div class="form-item column">
        <span class="block">For All Other Game Changes, route to :</span>
        <span class="block">Reviewer E-mail Address ></span>
        <div class="tag-input" v-if="form.game_changes == 'all'">
          <div
            v-for="(tag, index) in form.email"
            :key="tag"
            class="tag-input__tag"
          >
            <span @click="removeEmail(index)">x</span>
            {{ tag }}
          </div>
          <input
            type="text"
            placeholder="Enter an email"
            class="tag-input__text"
            @keydown.enter="addEmail"
            @keydown.188="addEmail"
          />
        </div>
        <select
          v-else
          v-model="form.specific_approval"
          name="cars"
          class="border-2 w-full"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>

    <div class="page-action px-10 border-t-2">
      <button
        type="button"
        class="p-1 cursor-pointer border-2 button button--primary"
      >
        <font-awesome-icon :icon="['fas', 'angle-double-left']" /> Back
      </button>
      <button type="button" class="p-1 cursor-pointer border-2 button">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blank",
  components: {},
  data() {
    return {
      value: [],
      activity_type: ["Conference", "Non-Conference", "Both"],
      activityType: [
        { id: "0", Type: "Conference" },
        { id: "1", Type: "Non-Conference" },
        { id: "2", Type: "Both" },
      ],
      defaultSelected: {
        name: "John",
        last: "Doe",
      },
      ConfigApproval: [],
      activity: [
        { id: 1, name: "basket" },
        { id: 1, name: "renang" },
        { id: 1, name: "tenis" },
        { id: 1, name: "footsal" },
        { id: 1, name: "sepak bola" },
      ],
      gender: [
        { id: 0, label: "N/A" },
        { id: 1, label: "lanang" },
        { id: 2, label: "wedok" },
        { id: 3, label: "gak jelas" },
      ],
      level: [
        { id: 1, labellevel: "dewo" },
        { id: 1, labellevel: "sangar" },
        { id: 1, labellevel: "kroco" },
        { id: 1, labellevel: "super" }
      ],
      schoolAdmins: [
        { id: 1, label: "suryo" },
        { id: 2, label: "addin" },
        { id: 3, label: "septian" },
        { id: 4, label: "adhit" },
        { id: 5, label: "tafsirul" },
        { id: 6, label: "viko" },
        { id: 7, label: "septian" },
      ],
      form: {
        game_changes: "all",
        approval: null,
        email: ["Satu", "Dua"],
        specific_approval: "",
        spesific_mail: [],
        deletedItem: [],
      },
    };
  },
  methods: {
    addEmail(event) {
      event.preventDefault();
      var val = event.target.value.trim();
      if (val.length > 0) {
        this.form.email.push(val);
        event.target.value = "";
      }
    },
    removeEmail(index) {
      this.form.email.splice(index, 1);
    },
    handleAddChoice() {
      let baseAdmin = this.schoolAdmins;
      let result = [];
      if (this.form.spesific_mail.length > 0){
        this.form.spesific_mail.forEach(item => {
          let test = [];
          baseAdmin.forEach(data => {
            if (data.id !== item.reviewer.id){
              test.push(data)
            } 
          })
          this.schoolAdmins = [...result, test][0]
        });
      }


      this.form.spesific_mail.push({
        action: "",
      activity_type: { id: 0, Type: "Non-Conference" },
      activity: this.activity[0],
      gender: this.gender[0],
      level: this.level[0],
      reviewer: this.schoolAdmins[0],
      });
    },
    handleRemoveChoice(index) {
      if (this.form.spesific_mail.length > 1) {
        this.form.spesific_mail.splice(index, 1);
      }
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

