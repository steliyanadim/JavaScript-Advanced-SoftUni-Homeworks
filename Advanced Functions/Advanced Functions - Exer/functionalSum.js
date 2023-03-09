// function add(num) {
//     let res = 0
//     return function(num){
//         return res+= num
//     }
// }
// console.log(add(1)(6)(-3))

// function add(...args1) {
//     return function (...args2) {
//         return function (...args3) {
//             return args1.concat(args2).concat(args3).reduce((a, b) => a + b)
//         }
//     }
// }
// function add(num) {
//     function adder(n) {
//         if (n !== undefined) {
//             num += n;
//             return adder;
//         }else { // terminate
//             return num;
//         }
//     }
//     return adder;
// }
0


function add(a) {
    return function(b) {
        return b ? add(a+b) : a;
    }

 }


console.log(add(1))
console.log(add(1)(4)(5))