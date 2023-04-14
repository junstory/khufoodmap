
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

//카카오맵
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.247899117265305, 127.07816984215327), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
console.log("지도생성 성공");
//Data Load
let positions = [];
function loadStores(){
    console.log("입력시작");
    database.ref("stores").on("value", callback);
    function callback(snapshot){
        console.log(snapshot);
        snapshot.forEach(function(child){
             console.log('<div>'+ child.store_name + "</div>");
             let temp = {
               content: '<div>'+ child.store_name + "</div>",
               latlng: new kakao.maps.LatLng(child.loc_lat,child.loc_lng)
             };
             console.log(temp);
             positions.push(temp);
        });
        $("#chatlist").scrollTop(15000);
    }
}
console.log("입력 완료");

let temp = {
  content: '<div>'+ "테스트" + "</div>",
  latlng: new kakao.maps.LatLng(37.247899117265305, 127.07816984215327)
};
positions.push(temp);

console.log(positions);

// 지도를 클릭한 위치에 표출할 마커입니다


for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });
    console.log("윈도우 생성완료");

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}