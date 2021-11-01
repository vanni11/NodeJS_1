const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name ? : ', (answer) => {
    console.log(`Hello!! ${answer}`); //백틱 이용한 예제
    console.log("Hello!! " + answer);

    rl.close();
})
