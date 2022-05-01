<template>
  <v-container grid-list-md text-xs-center fill-height>
    <v-layout row wrap align-center>
      <v-flex xs6 offset-xs3>
        <v-text-field
          v-model="fileName"
          name="photo"
          outline
          background-color="blue"
          color="blue"
          label="Select image"
          append-icon="attach_file"
          @click="selectFile"
        />
        <input
          ref="image"
          class="hide-input"
          type="file"
          accept=""
          @change="fileSelected"
        />
        <v-btn class="upload-button" color="indigo" @click="upload_photo">
          Upload
          <v-icon right color="white"> cloud_upload </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "FileUpload",
  data: () => ({
    file: "",
    fileName: "",
  }),
  methods: {
    selectFile() {
      this.file = this.$refs.image.click();
    },
    fileSelected(e) {
      this.$emit("input", e.target.files[0]);
      this.file = this.$refs.image.files[0];
      this.fileName = this.file.name;
    },
    async upload_photo() {
      let formData = new FormData();
      formData.append("file", this.file);
      let url = "/api/file";
      let config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      console.log(this.file);
      await this.$axios({
        method: "post",
        url: url,
        data: formData,
        config: config,
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

      //  await this.$axios
      //   .post("/api/file", {
      //     //data yang dikirim ke server
      //     file: this.file,
      //   })
      //   .then(() => {
      //     //redirect ke route "post"
      //     this.$router.push({
      //       name: "file",
      //     });
      //   })
      //   .catch((error) => {
      //     //assign validation
      //     this.validation = error.response.data;
      //   });
    },
  },
};
</script>
