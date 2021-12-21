const express = require("express");
const hbs = require("express-handlebars");

const server = express();

server.engine("hbs", hbs({
        extname: "hbs",  //익스텐션 이름
        defaultLayout: "layout.hbs", //기본 레이아웃 파일
        partialsDir: "partials" //부분적인 html파일 넣음
    })
);
server.set("view engine", "hbs"); //view engine을 위의 hbs로 사용할거다는 뜻
server.use(express.static(__dirname + "/public"));


server.get("/", (req, res) => {
    //layout.hbs의 body에 home.hbs를 넣는다는뜻
    res.render("home", {
        message:"Hello from handlebars!!"
    }); //이제 sendFile이 아니라 render한다!
});


server.listen(3000, (err)=>{
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
});