function solution(input) {
    // return function (toAdd) {
    //     return input+toAdd;
    // }
    function add(a,b) {
        return a+b;
    }
    return add.bind(this,input);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));