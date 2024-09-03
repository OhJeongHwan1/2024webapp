<template>
   <div class="madal" v-if="isModal">
      <div class="clickArea" v-on:click="$emit('closeModal')"></div>
      <div class="inner">
         <h2 class="mb-10">{{ data[selectedNum].title }}</h2>
         <hr class="mb-10" />
         <!-- <img :src="`./images/${data[selectedNum].img}`" alt="" /> -->
         <p class="mb-10">{{ data[selectedNum].detail }}</p>
         <button class="btn btn-primary" v-on:click="$emit('closeModal')">닫기</button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'modalView',
   props: {
      data: Array,
      isModal: Boolean,
      selectedNum: Number,
   },
};
</script>

<style lang="scss" scoped>
.madal {
   position: fixed; // fixed 하기 위해서는 크기 값이 있어야 한다.
   background-color: rgba(0, 0, 0, 0.7);
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
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
