let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec  = document.getElementById("sec");
let milisec = document.getElementById("milisec");

function clock()
{
   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let ml = new Date().getMilliseconds();


   h = h < 10 ? "0"+h : h;
   m = m < 10 ? "0"+m : m; 
   s = s <10 ? "0"+ s : s;
   ml= ml< 100 ? "0"+ ml : ml;


   hour.innerText = h;
   min.innerText = m;
   sec.innerText = s;  
   milisec.innerText = ml;

   setTimeout(function(){
     clock();
   },1000)

}
clock();