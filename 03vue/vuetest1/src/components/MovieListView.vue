<template>
   <div class="container mb-10">
      <h2 class="mb-10">HOT & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img :src="`./images/${item.img}`" :alt="`${item.img}`" />
               <div class="hot" v-if="item.hoticon">HOT</div>
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>❤️ {{ item.num }}</p>
               <p>대여료 {{ item.won }}원</p>
               <p class="mb-10">👍 {{ item.like }} <button v-on:click="$emit('likeUp', i)">클릭</button></p>
            </div>
            <div class="btn btn-primary" v-on:click="$emit('openModal', i)">상세보기</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'movieListView',
   props: {
      data: Array,
   },
};
</script>

<style lang="scss" scoped>
.cardWrap {
   display: flex;
   flex-wrap: wrap;
   gap: 15px;

   .card {
      width: calc((100% - 45px) / 4);
      @media screen and (max-width: 790px) {
         width: calc((100% - 15px) / 2);
      }

      @media screen and (max-width: 560px) {
         width: 100%;
      }
      .imgWrap {
         width: 100%;
         position: relative;
         overflow: hidden;
         cursor: pointer;
         border-radius: 5px;
         img {
            width: 100%;
            transition: 0.3s;
         }
         &:hover img {
            transform: scale(1.1);
         }
         .hot {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 2px 10px;
            border-radius: 5px;
            font-weight: bold;
            color: #eee;
            animation: police 0.2s infinite;
         }

         @keyframes police {
            0% {
               background-color: blue;
            }
            100% {
               background-color: red;
            }
         }
      }
   }
}
</style>
