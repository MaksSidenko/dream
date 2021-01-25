function fun1() {
   let a = document.getElementById("f1");
   let b = document.getElementById("i1");
   let c = document.getElementById("test")
   b.value = a.value
   c.style.left = a.value + 'px';
}

function fun2() {
   let a = document.getElementById("f2");
   let b = document.getElementById("i2");
   let c = document.getElementById("test")
   b.value = a.value
   c.style.right = a.value + 'px';
}

function fun3() {
   let a = document.getElementById("f3");
   let b = document.getElementById("i3");
   let c = document.getElementById("test")
   b.value = a.value
   c.style.top = a.value + 'px';
}

function fun4() {
   let a = document.getElementById("f4");
   let b = document.getElementById("i4");
   let c = document.getElementById("test")
   b.value = a.value
   c.style.bottom = a.value + 'px';
}