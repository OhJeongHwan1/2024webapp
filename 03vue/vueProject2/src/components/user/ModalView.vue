<template>
  <div class="madal" v-if="isModal">
    <div class="clickArea" v-on:click="$emit('closeModal')"></div>
    <div class="inner">
      <h5 class="mb-10">유저 정보 수정하기</h5>
      <hr class="mb-10" />
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="userid"
          v-model="editData.userid"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="password"
          v-model="editData.password"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="username"
          v-model="editData.username"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="addr"
          v-model="editData.addr"
        />
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            placeholder="latitude"
            v-model="editData.latitude"
          />
        </div>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            placeholder="longitude"
            v-model="editData.longitude"
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

      <div class="buttonWrap d-flex gap-2">
        <button class="btn btn-sm btn-success">수정</button>
        <button class="btn btn-sm btn-danger" v-on:click="$emit('closeModal')">
          닫기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
const store = useStore();

const editData = ref({
  userid: store.state.selectedUser.userid,
  password: store.state.selectedUser.password,
  username: store.state.selectedUser.username,
  addr: store.state.selectedUser.addr,
  image: store.state.selectedUser.image,
  latitude: store.state.selectedUser.latitude,
  longitude: store.state.selectedUser.longitude,
});

const props = defineProps({
  isModal: Boolean,
});
</script>

<style lang="scss" scoped>
.madal {
  position: fixed; // fixed 하기 위해서는 크기 값이 있어야 한다.
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .inner {
    background: #fff;
    width: 500px;
    padding: 16px 16px;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 570px) {
      width: 90%;
    }
  }
  .clickArea {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
}
</style>
