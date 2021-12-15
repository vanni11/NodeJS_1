const express = require("express");
const server = express();

//실행 차이는 없지만 구분을 위해 만든 규약
//GET   : 자원을 요청 -> www.facebook.com/ 의 html,css,js 가져옴
//POST  : 서버로 데이터를 보내서 확인 -> ID, PW 입력하면 체크
//DELETE: 서버에서 데이터를 지울때 -> 계정 삭제
//PUT   : 데이터 변경 -> 계정 정보 변경

//url입력해서 가면 get 메소드가 실행되는데
//post 메소드를 이용하려면 postman 사용해야함
server.get("/", (req, res)=>{
    res.send("<h1>hello from nodejs</h1>");
});

//서버를 3000번 포트로 열어줌
server.listen(3000, (err)=>{
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});

