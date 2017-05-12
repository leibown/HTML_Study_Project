/**
 * Created by Administrator on 2017/5/11.
 */
var key = "0975eec2bc5f40cda7e696a63a345922";
$(document).ready(function () {
    // getLocation();
    getWeatherData(0,0);
});
function getWeatherData(lng, lat) {
    // var url = "http://api.tianqi.com/?service=Tianqi.GetCaiYunByGps";
    // var url = "http://testapi.yangshen.com/?service=Home.GetTianqi";
    var url = " http://apis.haoservice.com/weather/geo?lon=" + lng + "&lat=" + lat + "&key=" + key;
    $.get(
        url,
        function (result) {
            console.log("result:" + result);
            // console.log("msg:" + msg);
            // console.log("data:" + data);
        })
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("同意获取位置:" + position.coords.longitude);
            console.log("同意获取位置222:" + position.coords.latitude);
            getWeatherData(position.coords.longitude, position.coords.latitude);
        });
    } else {
        alert("获取位置信息失败");
    }
}