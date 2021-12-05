console.log('Hello from hun');

/*2add, 3mult---------------------------*/
//add.js의 모듈을 불러옴
const add_cont = require('./2add.js'); //.js는 생략가능
const result1 = add_cont(1, 2);

const mult_cont = require('./3mult');
const result2 = mult_cont(5, 6);

console.log(result1);
console.log(result2);

/*4stat---------------------------*/
const stat = require('./4stat');
console.log(stat.pi);
console.log(stat.mean([1,2,3,4,5]));