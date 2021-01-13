//                            1) operator spread with array
let a = ["Mondey", "Tuersday", "Wednesday"];
console.log(...a);
let b = ["Mondey1", "Tuersday2", "Wednesday3"];
console.log(...b);
//в консоле мы получили набор строк вместо массива
//in the console we got a set of strings instead of an array
let c = [...a, ...b];
console.log(c);
//данный код превратится в массив
//this code will turn into an array
let a1 = a.concat(b)
console.log(a1);
//так происходило обьеденение раньше
//this is how the unification took place before
//2) operator spread with object
let a_21_56 = {
   January: 1,
   February: 2,
   March: 3
}
console.log({ a_21_56 });
//в данном случае должны быть фигурные скобки
//in this case there should be curly braces

//3) Practice
let a_22_06 = [1, 2, 10];
console.log(Math.max(...a_22_06));
//оператор spread помагает нам получить значение которые находятся в массиве. Иначе было бы Nan
//The spread operator helps us get the values ​​that are in the array. Otherwise it would be Nan

// let a_22_13 = ("a");
// document.getElementById(a_22_13).className = "b"; !!!!!!!!

//чтобы всё сработало нужно чтобы до document.getElementByI ничего не было
let a_23_00 = document.querySelectorAll('div');
console.log(a_23_00);
//решение проблемы с получением элементов с дом дерева в массив !!!!!
//solving the problem of getting elements from a tree house to an array
//querySelectorAll метод - находит заданный елеметы в js 
//querySelectorAll method - finds a given item in a js file
//может показазаться что этот метод вернёт массив но на самом деле он вернёт Node List(колекция дом элементов). Для того, чтобы он вернул массив можно использовать оператор spred. Смотри ниже.
let a_23_11 = document.querySelectorAll('div');
let a_23_12 = [...a_23_11];
console.log(a_23_11, Array.isArray(a_23_11));
console.log(a_23_12, Array.isArray(a_23_12));
// с помощью метода Array.isArray можно узнать является ли элемент массивом
// using the Array.isArray method, you can find out if an element is an array
//                           2) operator rest
function sum(a, b, c, ...maks) {
   console.log(maks);
   return a + b + c + maks.reduce((a, i) => a + i, 0);
}
let a_23_25 = [1, 2, 3, 4, 5, 6];
console.log(sum(...a_23_25));
// мы разбиваем на пять аргументов. Так как у нас толко три начальных аргумента просуммировались первые три елемента массива
// В данном случае ...maks это оператор rest он собирает оставшиеся аргуметы в новый массив 
//в массивы встроен метод reduce. Первым параметром он принимает функию. Вторым он принимает начальное значение аккамулятора - а. (a, i) - интегрируемый елемент. a+i - тело функции

let a_23_48 = [1, 2, 3, 4, 5, 6, 7];
let a_23_48_1 = a_23_48[0];
let a_23_48_2 = a_23_48[1];
console.log(a_23_48_1, a_23_48_2);
//a_23_48[1]; с помощью данного кода мы можнм получить отдельные елементы массива
//в ES6 синтаксисе есть более короткая записть для выборки елементов массива
let [a_23_55, a_23_56, ...rest] = a_23_48
console.log(a_23_55, a_23_56, rest);
//это называется деструкторизация
//мы взяли первые два элемента массива 
//также сдесь быд использован оператор rest
//                         деструктуризация для обьектов 
let a_00_00 = {
   name: "maks",
   age: "20",
   city: "Moscow"
}
let { name, age, ...city } = a_00_00;
console.log(name, age, city);
//another example using operator rest
//      Вывод: оператр spread как бы разворачивает такие елементы как массивы и блоки. А оператор rest собирает все парамерты в массив