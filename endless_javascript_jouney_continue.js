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

// const form=document.querySelector("#form");

// form.addEventListener('submit',(event)=>{
//     //event.preventDefault();
//     alert("form submmited");
// })

//now understanding synchronous and ansyncronous function
// function  first(){
//    Second();
//     console.log("first");
// }


// function Second(){

//     third();
//     console.log("second")
// }


// function third(){
//     console.log("third top of the stack");
// }

// console.log("startting")
// first();

// console.log("finished");


// callback hell


// function hwfinish(callback){
//     console.log("complete your hw ");


//     setTimeout(()=>{
//         console.log("hw done");
//         callback();
//     },2000);

// }

// function gotoplayground(){
//     console.log("now going to the playground.");
// }


// hwfinish(gotoplayground);



// promise 