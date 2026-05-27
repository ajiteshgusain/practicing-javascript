// // // callback function
// // function yamato_wave_motion_firing_sequence(){
// //     console.log("open the channel for wave motion energy.");


// //     setTimeout(()=>{
// //         console.log("tachyon partices rising in the chamber 120%");
// //         setTimeout(()=>{
// //             console.log("begin the firing the sequence ");
// //             setTimeout(()=>{
// //                 console.log("wave motion gun fire.");
// //             },1000)
// //         },1000)
// //     },2000)
// // }


// // yamato_wave_motion_firing_sequence();





// // // callback function
// // function yamato_wave_motion_firing_sequence1(callback){

// //     console.log("beginning the second  stage of firing the sequence");
// //     console.log("open the channel for wave motion energy.");
// //     setTimeout(()=>{
// //         console.log("tachyon partices rising in the chamber 120%");
// //         callback();
// //     },3000);
// // }
    


// // function yamato_wave_motion_firing_sequence2(callback){
// //     console.log("beginning the second  stage of firing the sequence");
// //     setTimeout(()=>{
// //         console.log("begin the firing the sequence ");
// //         callback();
// //     },2500);

// // }
// // function yamato_wave_motion_firing_sequence3(){
// //     console.log("beginning the  third  phase of the firing sequence.");
// //     setTimeout(()=>{
// //         console.log("wave motion gun fire.");
// //     },1000)
// // }    



// // yamato_wave_motion_firing_sequence1(()=>{
// //     yamato_wave_motion_firing_sequence2(()=>{
// //         yamato_wave_motion_firing_sequence3()
// //     });
// // });
// // promise


// const f1=new Promise((resolve,reject)=>{
//         console.log(" user please start the process");
        

//         setTimeout(()=>{
//             const loggedin=true;
//             if (loggedin){
//                 resolve("user logged in.");



//             }else{
//                 reject("user please try again!");

//             };


//         },2000);
//     });





// // delay().then((result)=>{
// //     console.log(`${result}`);
// // });

// console.log("waiting  for  the  user");
// console.log(f1);


// promise chaining

// function fetchData(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             if (Math.random()>0.5){
//                 reslove({success:true,data:'some data from the server.'

//                 });

//             }else{
//                 reject("Error : falied to fetch data. ");
//             }

//         },1000);

//     });

// }

// console.log("fetching  data...");
// fetchData()
// .then((data)=>{
//     console.log(`success! ${data}`);
// })
// .catch((error)=>{
//     console.log("some error occured :",error);
// })
// .finally(()=>{
//     console.log("thank you");
// });





// async and await

// function orderFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Food ordered from the app');
//             resolve();
//         }, 2000);
//     });
// }

// function prepareFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Restaurant prepared the food");
//             resolve();
//         }, 1000);
//     });
// }

// function deliverFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Delivery person delivered the food");
//             resolve();
//         }, 1000);
//     });
// }


// async  function foodorder(){
//     await orderFood()
//     await prepareFood()
//     await deliverFood()
//     console.log("eating ...")


// }


// foodorder();

// fetch api 

//  async   function gettodo(){
//     console.log("fetching todo  item...");

//     try{
//         const response=await fetch('https://jsonplacehoder.typicode.com/todos/1');
//         const data=await response.json();
//         console.log("todo data", data);
//     }catch(error){
//         console.log("could not fetch todo:",error);

//     };

// }

// gettodo();




// post request



async function createPost(){

    try{

        let response=await fetch('https://jsonplacehoder.typicode.com/todos/1',{

        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:"My New Post",
            body:"This is content of my post.",
            userId:1
        })
    
    });
    let data=await response.json();

    console.log("send to backend & created :", data);
}catch(error){

    console.log(error);
}
}



createPost();