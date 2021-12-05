const fs = require("fs");

//아래 예시는 모두 sync(동기) 적으로 실행됨

//파일 작성
fs.writeFileSync("./hello.txt", "Hello!!!");

//파일 읽기 -> 인코딩옵션 없으면 버퍼로 불러옴
const data = fs.readFileSync("./hello.txt", {encoding: "utf-8"});
console.log(data);

//파일에 추가
fs.appendFileSync("./hello.txt", "\nWelcome!!");

//현재 폴더 경로 읽기
const list = fs.readdirSync(".");
console.log(list);