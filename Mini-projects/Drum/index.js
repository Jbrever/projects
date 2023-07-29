let body =document.querySelector("body");
    
let heading =document.createElement("h1");
body.appendChild(heading);
heading.classList.add("heading");
heading.innerText ="drum kits"

let text = document.createElement("p");
body.appendChild(text)
text.innerText ="Click on Image to Play"

let main =document.createElement("div");
main.classList.add("main");
body.appendChild(main);



let arr=["snare","keyboard","tuba","violin"];
arr.forEach((Element,index)=>{

let imgarr=["https://images.unsplash.com/photo-1571327073757-71d13c24de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJ1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWNhbCUyMGluc3RydW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1528032947483-4e1df543253a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHZpb2xpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"] 

let btn = document.createElement("button");
main.insertBefore(btn,main.childNodes[index]);
btn.classList.add("btn");


let audio = document.createElement("audio");
btn.insertBefore(audio,btn.childNodes[index]);
audio.setAttribute("src",`audio/${arr[index]}.mp3`)
// audio.setAttribute("controls","");


btn.addEventListener("click",(e)=>{

  audio.play();
  setTimeout(()=>{
  audio.pause();
  },2000)

})


let h2head =document.createElement("h2");
btn.insertBefore(h2head,btn.childNodes[index]);
h2head.innerText =`${arr[index]}`


let images = document.createElement("img");
images.setAttribute("src",`${imgarr[index]}`);
images.classList.add("img");
btn.insertBefore(images,btn.childNodes[index]);

//     let timeline=gsap.timeline();
//     // timeline.to(".heading",{
//     //     y:200,
//     //     duration:2,
//     //     ease:"bounce"
//     // })


// gsap.to(".btn",{ 
//       y :700,
//       duration:2,
//       ease:'bounce'
//     })


});


