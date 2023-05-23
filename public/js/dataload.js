/*
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

//Data Load
positions = [];
//name : loadStores
function loadStores(){
    console.log("입력시작");
    database.ref("stores").on("value", callback);
    function callback(snapshot){

        snapshot.forEach(function(child){
            let info = child.val();
             let temp = {
               content: '<div>'+ info.store_name + "</div>",
               latlng: new kakao.maps.LatLng(info.loc_lat,info.loc_lng)
             };
             positions.push(temp);
        });
    }
}
loadStores();


let temp = {
  content: '<div>'+ "테스트" + "</div>",
  latlng: new kakao.maps.LatLng(37.247899117265305, 127.07816984215327)
};
positions.push(temp);

console.log(positions);
console.log("입력 완료");

*/
