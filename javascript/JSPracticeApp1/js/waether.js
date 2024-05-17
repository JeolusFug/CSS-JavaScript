const API_KEY = "6ecc9f3d5ab73eeebd18a040e22eec8f";

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // 경도와 위도를 받아올 수 있다.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherspan = document.querySelector("#weather span:first-child");
            const cityspan = document.querySelector("#weather span:last-child");
            weatherspan.innerText = data.name;
            cityspan.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        });
}

function onGeoError() {
    alert("위치 정보를 확인 할 수 없습니다. 날씨 정보를 제공 할 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 현재 브라우저를 킨 위치를 알려준다.
// 첫번째 인자는 성공했을때 함수, 두번째는 오류가 났을때 함수가 필요하다.