const express = require("express");
const server = express();

//#16 Middleware
//next를 안하면 다음으로 안넘어감
server.use((req, res, next) => {
    req.user = {
        id : "1234"
    };
    console.log("middleware end");
    next();
});
//파일 읽을때의 경로 설정해주는것
server.use(express.static(__dirname + "/public"));

//localhost:3000 접속시 index.html 표시해줌
server.get("/", (req, res) => {
    //현재 파일경로 : __dirname
    //현재 파일이름 : __filename
    res.sendFile(__dirname+"/index.html");
    console.log(req.user); //middleware에서 변경한 값 확인
});

//localhost:3000/about 접속시 about.html 표시해줌
server.get("/about", (req, res) => {
    res.sendFile(__dirname+"/about.html");
});

// /abc와 같이 없는 경로 접속하면 -> 위 지나오면서 맞는 reponse 찾을 수 없으므로 middleware 실행됨
server.use((req, res) => {
    res.sendFile(__dirname+"/404.html");
});

//+) 만약 css파일 만들고 html에서 링크걸어도 [css파일은 찾을 수 없기때문에] 연결안됨
//   -> 다음 강의인 middleware로 해결가능

server.listen(3000, (err)=>{
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});