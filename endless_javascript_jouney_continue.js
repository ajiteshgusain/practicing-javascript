// // ques  from ppt 6


// const hoverbox=document.querySelector("#hover-box");
// hoverbox.style.width="100px";
// hoverbox.style.height="100px";
// hoverbox.style.border="1px solid black";
// hoverbox.addEventListener("mouseover",()=>{

//     hoverbox.style.backgroundColor="lightblue";

// })

// hoverbox.addEventListener("mouseout",()=>{

//     hoverbox.style.backgroundColor="pink";
// })


// keyboard event

// const keyevent=document.querySelector("#keyinput");

// keyevent.addEventListener("keydown",(event)=>{

//     console.log(`key pressed :${event.key}`);
// });


// form event

const form=document.querySelector("#form");

form.addEventListener('submit',(event)=>{
    //event.preventDefault();
    alert("form submmited");
})




