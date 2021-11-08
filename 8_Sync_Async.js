// Synchronous  VS  Asynchronous
// Block        VS  Non-Block

const fs = require("fs");
const { start } = require("repl");

//Sync
// const data = fs.readFileSync("./hello.txt", {encoding: "utf-8"});
// console.log(data);

//Async --> 아래 data변수에 넣는거 안기다리고 text출력부분을 먼저함
let text = "default!";
const data = fs.readFile ("./hello.txt", {encoding: "utf-8"}, (err,data) => {
    console.log(data);
    text = data;
});
console.log(text);


//setTimeout 예시 (Async의 대표예시) -> 이런 상황들에서 데이터 참조할때 Sync적인게 필요할 수 있음
let startTime = Date.now();
setTimeout(() => {
    console.log('print after 5 seconds');
    console.log(Date.now() - startTime, "First");
}, 3000);
console.log(Date.now() - startTime, "Second");