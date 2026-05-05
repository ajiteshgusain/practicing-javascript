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
//     console.log("now going to the playground."); }

// hwfinish(gotoplayground);



// promise 

// const  homeworkpromise= new  Promise((resolve,reject)=>{
//     console.log("i  promise to do my hw by tomorrow.");


//     setTimeout(()=>{
//         const didhw=true;
//         if (didhw){
//             resolve("i  done my hw please submmited it,!!");

//         }else{

//             reject(" i am laxy  i did'nt  comeplete it !!!");
//         };
//     },2000);
// });

// console.log("wating for him");
// console.log("took you lomng enough.");

// function delay(ms){
//     return  new Promise((resolve, reject) => { 
//         setTimeout(()=>{
//             resolve(`action compeleted after some time ${ms}`);
//         },ms);



//      });
// }

// console.log("strarting delay ..........");
// delay(3000).then((message)=>{
//     console.log(message);
// })




// /// promise chainging

// function dohomework(){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             let homeworkdone=true;
//             if (homeworkdone){
//                 resolve(" i have done my homework!!!");
//             }else{
//                 reject("homework not done");
//             };

//         },4000);
//     });
// };


// function dinnereat(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {

//             let dinnereaten=true;
//             if(dinnereaten){
//                 resolve("you can eat dinner");
//             }else{
//                 reject("ajj tuma kahana nahi mi laga!!!");
//             };
            
//         },3000);
//     })
// }



// function gotoplay(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let permission=true;

//             if (permission){
//                 resolve("you can play");
//             }else{
//                 reject("you can not play");
//             };
//         },1000)
//     })
// }

// prmise chaining

// dohomework().then((data)=>{
//     console.log(data);
//     return dinnereat().then((data)=>{
//         console.log(data);
        
        
//         return gotoplay().then((data)=>{
//             console.log(data);
//         })


//     })
// }).catch((error)=>{
//     console.log(error)


// }).finally(()=>{
//     console.log("ended");
// })

// dohomework()
//         .then((data)=>{console.log(data);
//             return dinnereat();
//         })
//         .then((data )=>{
//             console.log(data);
//             return gotoplay();
//         })
//         .then((data)=>{
//             console.log(data)
//         })


// async and await 
// this code has no reject it will always succes
// function orderfood(){
//     return new Promise((resolve,reject)=>{
//         console.log("order recieved!!!");
//         setTimeout(()=>{

//             let odergiven=true;

//             if(odergiven){
//                 resolve("order is being taken successfully!!");
//             }
//             else{
//                 reject(" please try again");
//             };

//         },3000)

//     })

// }



// function preparefood(){
//     return new Promise((resolve)=>{

//         setTimeout(()=>{
//             console.log("restaurant has began making food.");

//             resolve();

//         },2000)


//         }) 
// }

// function deliverfood(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{

//             console.log("we delivered the food")
//             resolve();

//         },1040)
//     })
// }



// async function foodorder(){

//     await orderfood();
//     await preparefood();
//     await deliverfood();
//     console.log("eatting begins");
    
// }
// foodorder()

//  async function getGreeting() {
//     return ("hello from async!!!!")
    
//  }

//  console.log("calling the function !!!!!!......");
// getGreeting().then((data)=>{

//     console.log("recevied",data);
// });
// console.log("function call intiated");


// fetch api

async function  fetachusers() {
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok){
            throw new Error("HTTP error"+response.status);
        }
        const data=await response.json();
        console.log(data);


    }
    catch(error){
        console.log("fetched failed:",error.message);
    }

    
}

fetachusers();