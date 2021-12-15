const express = require("express");
const server = express();

//localhost:3000 접속시 index.html 표시해줌
server.get("/", (req, res)=>{
    //현재 파일경로 : __dirname
    //현재 파일이름 : __filename
    res.sendFile(__dirname+"/index.html");
});

//localhost:3000/about 접속시 about.html 표시해줌
server.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
});

//+) 만약 css파일 만들고 html에서 링크걸어도 [css파일은 찾을 수 없기때문에] 연결안됨
//   -> 다음 강의인 middleware로 해결가능

server.listen(3000, (err)=>{
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});