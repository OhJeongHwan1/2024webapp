<template>
   <NavBarView />
   <MovieListView :data="data" @likeUp="i => increseLike(i)" @openModal="i => modalOpen(i)" />
   <ModalView :data="data" :isModal="isModal" :selectedNum="selectedNum" @closeModal="modalClose" />
</template>

<script>
import mdata from './assets/mdata';
import NavBarView from './components/NavBarView.vue'; // 컴포넌트 불러오기
import ModalView from './components/ModalView.vue';
import MovieListView from './components/MovieListView.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
      };
   },
   methods: {
      increseLike(index) {
         this.data[index].like += 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
      modalClose() {
         this.isModal = false;
      },
   },
   components: {
      NavBarView: NavBarView, // 등록
      ModalView: ModalView,
      MovieListView: MovieListView,
   },
};
</script>

<style lang="scss">
$radius: 5px;
.container {
   width: 1000px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
      padding: 0 16px;
   }
   img {
      display: block;
   }
}
.mb-10 {
   margin-bottom: 10px;
}
.btn {
   background-color: pink;
   border-radius: $radius;
   text-align: center;
   padding: 5px 16px;
   cursor: pointer;
   color: white;
   border: 0 none;
   width: 100%;
   &.btn-primary {
      background-color: pink;
   }
   &.btn-info {
      background-color: green;
   }
}
</style>
