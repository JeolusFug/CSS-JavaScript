const quotes = [
    {
        good: "잘 생각하고 만들어보자",
        author: "0101"
    },
    {
        good: "화내지 말자",
        author: "0202"
    },
    {
        good: "솔직히 내가 잘못 코딩한게 맞다",
        author: "0303"
    },
    {
        good: "안되면 처음부터 다시 시작하는 것도 방법이다",
        author: "0404"
    },
    {
        good: "포기하지 말자",
        author: "0505"
    },
    {
        good: "언젠가 나만의 앱을 만들어 보자",
        author: "0606"
    },
    {
        good: "생각하고 말하고 생각하고 행동하자",
        author: "0707"
    },
    {
        good: "걱정 끼치지 말자",
        author: "0808"
    },
    {
        good: "내일의 나는 더 나은 내가 될 것이다",
        author: "0909"
    },
    {
        good: "오늘의 나를 더 발전 시키자",
        author: "1010"
    }
];

const goodword = document.querySelector("#goodword span:first-child");
const author = document.querySelector("#goodword span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

goodword.innerText = todaysQuotes.good;
author.innerText = todaysQuotes.author;
