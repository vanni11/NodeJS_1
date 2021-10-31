
const pi = 3.14;
const mean = (arr) => {
    if(arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length
};

//여러 값을 모듈화하려면 오브젝트로 만들면됨
module.exports = {
    // pi:pi,
    // mean:mean

    //이름 같게 모듈화하려면 이렇게 이름만써도됨
    pi,
    mean
}

// //이렇게도 많이씀 / module.도 생략해도됨
// module.exports.pi = pi;
// module.exports.mean = mean;
