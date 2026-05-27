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

function fetchData(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            if (Math.random()>0.5){
                reslove({success:true,data:'some data from the server.'

                });

            }else{
                reject("Error : falied to fetch data. ");
            }

        },1000);

    });

}

console.log("fetching  data...");
fetchData()
.then((data)=>{
    console.log(`success! ${data}`);
})
.catch((error)=>{
    console.log("some error occured :",error);
})
.finally(()=>{
    console.log("thank you");
});