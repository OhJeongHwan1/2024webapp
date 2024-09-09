<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="userid"
        v-model="userData.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="password"
        v-model="userData.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="username"
        v-model="userData.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="addr"
        v-model="userData.addr"
      />
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="latitude"
          v-model="userData.latitude"
        />
      </div>
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="longitude"
          v-model="userData.longitude"
        />
      </div>
    </div>

    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        id="fileform"
        @change="handleImage"
        accept="imgae/*"
      />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>
    <div class="btn btn-primary" @click="addUser">회원가입</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const userData = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  image: null,
  latitude: null,
  longitude: null,
});

const clearForm = () => {
  userData.value.userid = null;
  userData.value.password = null;
  userData.value.username = null;
  userData.value.addr = null;
  userData.value.image = null;
  userData.value.latitude = null;
  userData.value.longitude = null;

  const fileInput = document.getElementById("fileform"); // 반인딩된값이 없기 때문에
  if (fileInput) {
    fileInput.value = ""; // 직접 DOM 에 접근하여 초기화
  }
};

const addUser = () => {
  let temp = {
    userid: userData.value.userid,
    password: userData.value.password,
    username: userData.value.username,
    addr: userData.value.addr,
    image: userData.value.image,
    latitude: userData.value.latitude,
    longitude: userData.value.longitude,
  };
  store.commit("addUser", temp);
  clearForm();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    userData.value.image = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
