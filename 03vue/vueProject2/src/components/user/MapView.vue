<template>
  <div class="col-md-8">
    <div id="map" style="width: 100%; height: 400px"></div>
    <p id="result"></p>
  </div>
  <div id="areaList" class="col-md-4 d-flex flex-column" style="height: 400px">
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
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";

const latitude = ref(0);
const longitude = ref(0);

const markArray = reactive([]);
const inMaps = reactive([]);

let map;

onMounted(() => {
  initMarkArray();

  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

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
  let imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵
  let markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  markArray.value.forEach((markPos) => {
    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(...markPos),
      image: markerImage,
    });
    marker.setMap(map);
  });

  kakao.maps.event.addListener(map, "bounds_changed", function () {
    let bounds = map.getBounds();
    let swLatlng = bounds.getSouthWest(); // 남서쪽
    let neLatlng = bounds.getNorthEast(); // 북동쪽

    const array = markArray.value.filter(
      (markPos) =>
        markPos[0] >= swLatlng.getLat() &&
        markPos[0] <= neLatlng.getLat() &&
        markPos[1] >= swLatlng.getLng() &&
        markPos[1] <= neLatlng.getLng()
    );
    inMaps.value = array;
  });
};

const getRanLat = () => {
  const minLat = 37.45933351263538;
  const maxLat = 37.51707751597751;
  return Math.random() * (maxLat - minLat) + minLat;
};

const getRanLng = () => {
  const minLng = 126.84477821362898;
  const maxLng = 126.9271876300995;
  return Math.random() * (maxLng - minLng) + minLng;
};
const initMarkArray = () => {
  const tempArray = [];
  for (let i = 0; i < 15; i++) {
    tempArray.push([getRanLat(), getRanLng(), i]);
  }
  markArray.value = tempArray;
};

const moveCenter = (item) => {
  var moveLatLon = new kakao.maps.LatLng(item[0], item[1]);

  // 지도 중심을 이동 시킵니다
  map.setCenter(moveLatLon);
};
</script>

<style lang="scss" scoped>
#areaList {
  overflow-y: auto;

  .item {
    border: 3px solid#61380B;
    cursor: pointer;
    transition: 0.2s;
    background-color: #fafafa;

    &:hover {
      transform: scale(1.01);
    }
  }
}
</style>
