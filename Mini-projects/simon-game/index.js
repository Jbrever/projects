let level = document.querySelector(".level");
let cards = document.querySelectorAll(".cards");
let colorarr = ["red","orange","blue","purple"];
let startbtn  = document.querySelector("button");
let form = document.querySelector("form");
let start=0;
let levelvalue =1;    


startbtn.addEventListener("click",function(){
if(start==false){
    start=1;
    levelup();
}

this.innerText="Restart"

startbtn.addEventListener("click",function(){
       form.appendChild(startbtn)

})

})
function autoflashbtn(flash){
    flash.classList.add("flash");
    setTimeout(()=>flash.classList.remove("flash"),
    250)
}

let levelup=()=>{
     
    level.innerText = `Level ${levelvalue}` 
    levelvalue++;
    let random = Math.floor(Math.random()*colorarr.length);
    let randomcolor=colorarr[random];
    let flashbtn = document.querySelector(`.${randomcolor}`);
   
    autoflashbtn(flashbtn);
    
}
function userflashbtn(){
    userbtn=this;
    userbtn.classList.add("userflash");
    setTimeout(()=>{
          userbtn.classList.remove("userflash");
     },250)
    
    
}

cards.forEach(Element => {
    
    Element.addEventListener("click",userflashbtn);
    
});
