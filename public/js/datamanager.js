
const firebaseConfig = {
  apiKey: "AIzaSyAoZUGl18Dhh0nKli7WsGjYzDRYSTdoEZA",
  authDomain: "khufoodmap.firebaseapp.com",
  databaseURL: "https://khufoodmap-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "khufoodmap",
  storageBucket: "khufoodmap.appspot.com",
  messagingSenderId: "476679246747",
  appId: "1:476679246747:web:57414e0c6459a9c927873e",
  measurementId: "G-CT06N9E2YG"
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();
let submit_btn =  document.getElementById("submit_button");
let lat;
let lng;
function writeUserData() {
  let storename = document.getElementById("storename");
  let date = new Date()
  firebase.database().ref('stores/' + storename.value).set({
    store_name : storename.value,
    loc_lat: lat,
    loc_lng: lng
  });
  storename.value = "";
  alert("등록 성공!");
}

//카카오맵
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.247899117265305, 127.07816984215327), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도를 클릭한 위치에 표출할 마커입니다
var marker = new kakao.maps.Marker({
    // 지도 중심좌표에 마커를 생성합니다
    position: map.getCenter()
});
// 지도에 마커를 표시합니다
marker.setMap(map);

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

    // 클릭한 위도, 경도 정보를 가져옵니다
    var latlng = mouseEvent.latLng;
    lat = latlng.getLat();
    lng = latlng.getLng();
    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);

    var message = '위도: ' + latlng.getLat() + ', ';
    message += '경도: ' + latlng.getLng();

    var resultDiv = document.getElementById('clickLatlng');
    resultDiv.innerHTML = message;

});

submit_btn.addEventListener('click', ()=>
  writeUserData(lat,lng)
);
