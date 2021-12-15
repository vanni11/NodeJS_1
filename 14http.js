const http = require("http");

//이렇게하면 서버 생성임. 접속할때마다 req, res 콜백함수 실행
const server = http.createServer((req, res)=>{
    console.log(req.url); //localhost:3000 접속하면 주소창에 입력한 url을 출력함
    if(req.url === "/"){
        //기본경로로 들어오면 아래 출력
        res.write("<h1>hello from nodejs</h1>");
    }else{
        //다른경로로 들어오면 아래 출력
        res.write(`<h1>you have entered this url : ${req.url}`); //
    }
    res.end(); //응답 종료
});

//서버를 3000번 포트로 열어줌
server.listen(3000, ()=>{
    console.log("The server is listening on port 3000");
});

