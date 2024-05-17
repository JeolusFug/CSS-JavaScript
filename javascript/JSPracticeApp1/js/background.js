const images = [
    "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", 
];

const chooseImg =  images[Math.floor(Math.random()*images.length)];

const bgimg = document.createElement("img");
// bgimg라는 변수를 선언해서 html에 img라는 Element를 생성한다
bgimg.src = `img/${chooseImg}`;
// bgimg라는 변수는 src라는 속성을 `img/${chooseImg}`;라는 속성값을 가지게 한다.

document.body.appendChild(bgimg);
// html의 body에 bgimg를 추가한다