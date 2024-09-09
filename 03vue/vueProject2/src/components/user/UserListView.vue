<template>
  <div class="listWrap" style="height: 360px">
    <div
      id="userWrap"
      v-for="(item, i) in $store.state.userData"
      :key="i"
      class="d-flex gap-2 shadow rounded p-3 mb-2 bg-white"
    >
      <div class="avata">
        <img :src="item.image" alt="" />
      </div>
      <div class="infoArea">
        <h5 class="mb-0">
          {{ item.userid }}
        </h5>
        <p class="mb-0">{{ item.username }}</p>
      </div>
      <div
        class="buttonWrap d-flex flex-column gap-1 align-items-center justify-content-center"
      >
        <div class="btn btn-primary btn-sm" @click="modalOpen(item)">수정</div>
        <div
          class="btn btn-danger btn-sm"
          @click="deleteUser(item.userid, item.username)"
        >
          삭제
        </div>
      </div>
    </div>
    <div class="none" v-if="$store.state.userData.length === 0">
      유저가 없습니다.
    </div>
    <ModalView
      v-if="$store.state.selectedUser"
      :isModal="isModal"
      @closeModal="modalClose"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import ModalView from "./ModalView.vue";

const isModal = ref(false);
const store = useStore();

function deleteUser(id, name) {
  if (confirm(`'${name}'유저를 정말 삭제하시겠습니까?`))
    store.commit("deleteUser", id);
}

function modalOpen(user) {
  isModal.value = true;
  store.commit("setSelectedUser", user);
}
function modalClose() {
  isModal.value = false;
}
</script>

<style lang="scss" scoped>
.listWrap {
  overflow-y: auto;
}
#userWrap {
  position: relative;
  .buttonWrap {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 70px;
    height: 100%;
  }
}
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.infoArea {
  width: 60%;

  h5,
  p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
