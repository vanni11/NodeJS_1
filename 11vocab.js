const fs = require("fs");

const data = fs.readFileSync("./12vocab.json", {encoding:"utf-8"});
let arr = JSON.parse(data);
console.log(arr);

const ob = {
    //오브젝트 만들때 키값은 원래 그냥 만드는데, json파일에서 만들땐 stirng으로 해야함
    name : "taehun",
    age : 30,
    description : "bounce b scoring muchine",
};

//예전 버전 : 강의에서처럼 그냥 ob쓰면 "object Object" 라고 저장됨
//지금 버전 : object로 판단하면 에러남
//-> 두개버전 다 stringify 해줘야함
fs.writeFileSync("13taehun.json", JSON.stringify(ob, null, 2)); //이렇게 null, 2 추가해야 정렬돼서 보임