// 1
function randomFunction(n) {
   return function () {
      console.log(2 * n);
   }
}
// console.log(randomFunction(4)) // возвращает внутренюю функцию

let a = randomFunction(4);
a(); //коректная работа
//вызывая функцию, randomFunction возвращает нам функию которая находится  ней.

//2
function a_19_41(maks) {
   return function (vika) {
      return maks + vika
   }
}
let sum = a_19_41(1);
console.log(sum(3));
// параметр maks в первой функции и во второй зпмкнулись и равны 1

//3
function a_20_10(domain) {
   return function (url) {
      return `https://${url}.${domain}`
   }
}

let a_20_11 = a_20_10("com")
console.log(a_20_11("google"))
//новая функция замкнута на облать видимости родительской
//4

let a_20_32;

function a_20_33() {
   console.log(a_20_32);
}
a_20_33();
//область видимости функции a_20_33 замкнута на переменную a_20_32. Это называтся взять переменную из лексического окружения
// замыкание возникает в том случае когда мы из ожной функции возвращаем новую функцию. Тогда мы говорим, что новая функция замкнута на область видимости родительской функции

let g = 0;
function f() {
   ++g
   return g;
}
console.log(f());
console.log(f());//счётчик
// перемення let g и значение возращаемое функией f - замкнуты. let g будет постоянно прибаволятся на 1
//ДЛЯ ЧЕГО НУЖНЫ ЗАМЫКАНИЯ.
//например нам нужно создать несколько паралельных счётчика 
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


