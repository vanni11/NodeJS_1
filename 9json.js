const fs = require("fs");

const data = fs.readFileSync("./10json.json", {encoding:"utf-8"});

console.log(data);
console.log(typeof data); //-> 스트링

// JSON.parse : 스트링->오브젝트, JSON.stringify : 오브젝트->스트링
console.log(JSON.parse(data));
console.log(typeof JSON.parse(data));

//배열로 변경
let arr = JSON.parse(data);
console.log(arr[2]);