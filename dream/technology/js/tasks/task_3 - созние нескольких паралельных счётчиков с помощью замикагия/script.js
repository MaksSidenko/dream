// создание двух паралельных счётчиков без использвания глобальных переменных
function a1_15_54(m) {
   return function () {
      return m++
   }
}
let noname = a1_15_54(1);
console.log(noname());
console.log(noname());
console.log(noname());

let xz = a1_15_54(10);
console.log(xz());
console.log(xz());
console.log(xz());


