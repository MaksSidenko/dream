//                            Задача 1 
// Реализовать function sum таким образом, что бы sum(2,3)==sum(2)(3)===5
// первый вариант решения
// function sum(a, b) {
//    if (b) {
//       return (a + b);
//    }
//    return function (c) {
//       return a + c
//    }
// }
// let sum1 = sum(1, 5);
// let sum2 = sum(1)(5);
// console.log(sum1);
// console.log(sum2);

// второй вариант решения
// function sum3(...args) {
//    if (args.length === 2) {
//       return args[0] + args[1]
//    }
//    return function (b) {
//       return args[0] + b;
//    }
// }
// console.log(sum(3)(2));


// sum(2,3)==sum(2)(3)===5
// ----------------
// третий вариант решения

function sum10() {
   var a = arguments[0];
   return arguments.length > 1 ?
      a + arguments[1] : function (b) { return a + b; }
}

console.log(sum10(11)(111));
//четвёртый вариант решения
sum11 = (a, b) => b ? a + b : c => a + c
console.log(sum11(112)(12));





