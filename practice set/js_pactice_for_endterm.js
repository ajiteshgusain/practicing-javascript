// // callback function
// function yamato_wave_motion_firing_sequence(){
//     console.log("open the channel for wave motion energy.");


//     setTimeout(()=>{
//         console.log("tachyon partices rising in the chamber 120%");
//         setTimeout(()=>{
//             console.log("begin the firing the sequence ");
//             setTimeout(()=>{
//                 console.log("wave motion gun fire.");
//             },1000)
//         },1000)
//     },2000)
// }


// yamato_wave_motion_firing_sequence();





// callback function
function yamato_wave_motion_firing_sequence1(callback){

    console.log("beginning the second  stage of firing the sequence");
    console.log("open the channel for wave motion energy.");
    setTimeout(()=>{
        console.log("tachyon partices rising in the chamber 120%");
        callback();
    },3000);
}
    


function yamato_wave_motion_firing_sequence2(callback){
    console.log("beginning the second  stage of firing the sequence");
    setTimeout(()=>{
        console.log("begin the firing the sequence ");
        callback();
    },2500);

}
function yamato_wave_motion_firing_sequence3(){
    console.log("beginning the  third  phase of the firing sequence.");
    setTimeout(()=>{
        console.log("wave motion gun fire.");
    },1000)
}    



yamato_wave_motion_firing_sequence1(()=>{
    yamato_wave_motion_firing_sequence2(()=>{
        yamato_wave_motion_firing_sequence3()
    });
});