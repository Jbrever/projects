let btn =document.querySelector("button");
let bgBox = document.querySelectorAll(".bg");
let str ="0123456789abcde"
let heading = document.querySelector(".heading");
let headingH1 = document.querySelector("h1");
let scrollHeading = document.querySelector(".scrolldown")


let timeline = gsap.timeline();

timeline.to("button",{
    y:200,
    duration:1,
    ease:'bounce'
})

timeline.to("h1",{
    y:200,
    duration:1,
    ease:"bounce"

})

timeline.to(".scrolldown",{
    x:260,
    duration:2,
    repeat:-1,
    yoyo:1,
    ease:"bounce"
})





btn.addEventListener("click",function(){
    bgBox.forEach((box,index)=>{
        // let ranNum = Math.floor(Math.random()*1000000)
        // box.style.backgroundColor=`#${ranNum}`
        // box.innerText =`#${ranNum};`
    
         let colorCode=""
         for(let i=0;i<6;i++){
            let random = Math.floor(Math.random()*str.length);
            
            colorCode = colorCode + str[random];  
        }
        box.style.backgroundColor=`#${colorCode}`; 
        box.innerText=`#${colorCode};`
      
        
    })
    



})




bgBox.forEach((box,index)=>{
    // let ranNum = Math.floor(Math.random()*1000000)
    // box.style.backgroundColor=`#${ranNum}`
    // box.innerText =`#${ranNum};`

     let colorCode=""
     for(let i=0;i<6;i++){
        let random = Math.floor(Math.random()*str.length);
        
        colorCode = colorCode + str[random];  
    }
    box.style.backgroundColor=`#${colorCode}`; 
    box.innerText=`#${colorCode};`
   
    
})


window.addEventListener("scroll",(e)=>{
    let scrollval = window.pageYOffset;
    if(0<scrollval){
        heading.style.backgroundColor="#f2f0eb"
        headingH1.style.color ="black"
        btn.style.backgroundColor="#121212"
        btn.style.color="white"
        scrollHeading.style.color="#f2f0eb"
    }
    else{
        heading.style.backgroundColor="#121212"
        headingH1.style.color ="white"
        btn.style.backgroundColor="white"
        btn.style.color="red"
        
        

    }
})