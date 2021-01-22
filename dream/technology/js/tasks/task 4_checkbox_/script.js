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
         console.log("true " + i);
      }
   }
}

