<template>
  <div class="col-md-8">
    <div id="map" style="width: 100%; height: 400px"></div>
    <p id="result"></p>
  </div>
  <div
    id="areaList"
    class="bg-white rounded col-md-4 d-flex flex-column py-2"
    style="height: 400px"
  >
    <div v-if="inMaps.value">
      <div
        class="item p-3 rounded mb-2"
        v-for="(item, i) in inMaps.value"
        :key="i"
        @click="moveCenter(item)"
      >
        {{ `탐앤탐스 ${item[2] + 1} 호 점` }}
      </div>
    </div>
    <div v-if="!inMaps.value || inMaps.value.length === 0">
      <p class="none">검색되는 매장이 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import { useStore } from "vuex";

const latitude = ref(0);
const longitude = ref(0);
const inMaps = reactive([]);
const store = useStore();

let map;
let markArray = [];
let userMarks = []; // 지도에서 삭제를 위해 임시로 저장하는 배열

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      initMarkArray();
      initMap();
    },
    (err) => {
      alert(err.message);
    }
  );
});

const initMap = () => {
  const container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };
  map = new kakao.maps.Map(container, options);

  let imageSrc = "https://www.tomntoms.com/assets/marker-929211b6.svg"; // 마커이미지의 주소입니다
  let imageSize = new kakao.maps.Size(56, 63); // 마커이미지의 크기입니다
  let imageOption = {}; // 마커이미지의 옵
  let markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  // 랜덤으로 만든 카페 지도에 표시하기
  markArray.forEach((markPos) => {
    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(...markPos),
      image: markerImage,
      clickable: true,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      moveCenter([marker.getPosition().Ma, marker.getPosition().La]);
    });
    marker.setMap(map);
  });

  kakao.maps.event.addListener(map, "bounds_changed", function () {
    let bounds = map.getBounds();
    let swLatlng = bounds.getSouthWest(); // 남서쪽
    let neLatlng = bounds.getNorthEast(); // 북동쪽

    const array = markArray.filter(
      (markPos) =>
        markPos[0] >= swLatlng.getLat() &&
        markPos[0] <= neLatlng.getLat() &&
        markPos[1] >= swLatlng.getLng() &&
        markPos[1] <= neLatlng.getLng()
    );
    inMaps.value = array;
  });

  upDateUserMarker();
};
// userData 가 변하는지 상태 감지
watch(
  () => store.state.userData,
  () => {
    upDateUserMarker(); // userData가 변경되면 마커 업데이트
  },
  { deep: true } // userData 배열 내부의 객체 변화까지 감지하기 위해 deep 옵션 사용
);

const getRanLat = () => {
  const minLat = latitude.value - 0.03;
  const maxLat = latitude.value + 0.03;
  return Math.random() * (maxLat - minLat) + minLat;
};

const getRanLng = () => {
  const minLng = longitude.value - 0.04;
  const maxLng = longitude.value + 0.04;
  return Math.random() * (maxLng - minLng) + minLng;
};
const initMarkArray = () => {
  const tempArray = [];
  for (let i = 0; i < 15; i++) {
    tempArray.push([getRanLat(), getRanLng(), i]);
  }
  markArray = tempArray;
};

const moveCenter = (item) => {
  var moveLatLon = new kakao.maps.LatLng(item[0], item[1]);

  // 지도 중심을 이동 시킵니다
  map.panTo(moveLatLon);
};

function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}

function upDateUserMarker() {
  userMarks.forEach((userMark) => userMark.setMap(null)); // 지도에서 user 마커를 삭제 (마커는 직접 삭제해줘야 하기 때문)
  userMarks = []; // 다시 새롭게 마커 배열을 생성하기

  store.state.userData.forEach((user) => {
    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(user.latitude, user.longitude),
    });

    var infowindow = new kakao.maps.InfoWindow({
      content: `<div class="rounded text-center" style="width:150px; border:1px solid black">${user.username} 주소</div>`, // 인포윈도우에 표시할 내용
    });

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );

    marker.setMap(map);
    userMarks.push(marker); // 배열에 마커 push
  });
}
</script>

<style lang="scss" scoped>
#areaList {
  overflow-y: auto;

  .item {
    cursor: pointer;
    transition: 0.2s;
    background-color: #fafafa;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.01);
    }
  }
}
</style>
