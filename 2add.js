//app.js같은 다른곳에서 바로 사용못함
const add_func = (a, b) => {
    return a + b;
};
// 이렇게 모듈로 만들어줘야 다른곳에서 쓸 수 있음
module.exports = add_func;