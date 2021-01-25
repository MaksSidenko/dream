//checkbox
function lala() {
   let a = document.getElementById("chbox");
   if (a.checked) {
      console.log(true);
   } else {
      console.log(false);
   }
}
// ------------------------------
//radiobtn
function radio() {
   let maks = document.getElementsByName('rd');
   for (let i = 0; i < maks.length; i++) {
      if (maks[i].checked) {
         i += 1
         console.log("true " + i);
      }
   }
}
//select
function mySelect() {
   let a = document.getElementById("randomSelect").selectedIndex;
   let b = document.getElementById("randomSelect").options;
   alert("Выбрано " + b[a].text);
}
// .checked .selectedIndex и .options - это свойства 

// ----------

//input type range
function fun1() {
   let a = document.getElementById("f1");
   let b = document.getElementById("one");
   b.innerHTML = a.value;
}
function fun2() {
   let a = document.getElementById("f2");
   let b = document.getElementById("a_20_56");
   b.value = a.value;
}
function fun3() {
   let a = document.getElementById("f3");
   let b = document.getElementById("changeable");
   b.style.width = a.value + 'px';

}
