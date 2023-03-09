function solution(input) {

    return function(num){
        return input + num
    }
}


let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

