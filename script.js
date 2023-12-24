
let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let int = null;

// function stopWatch(){
//     seconds++;

//     if(seconds==60){
//         seconds=0;
//         minutes++;

//         if(minutes == 60){
//             minutes = 0;
//             hours++;
//         }
//     }
    
//     let h  = hours < 10 ? "0" + hours : hours ;
//     let m  = minutes < 10 ? "0" + minutes : minutes ;
//     let s  = seconds < 10 ? "0" + seconds : seconds ;

//     displayTime.innerHTML = h + ":" + m + ":" + s;
// }

// function watchStart(){

//     if( timer !== null ){
//         clearInterval(timer)
//     }

//         timer = setInterval(stopWatch,1000);
// }

// function watchStop(){
//     clearInterval(timer)
// }

// function watchReset(){
//     clearInterval(timer);
//     [seconds, minutes, hours] = [0,0,0];
//     displayTime = "00:00:00";
// }

document.getElementById("start").addEventListener("click",
() => {
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayData , 1000); 
});

document.getElementById("stop").addEventListener("click",
() => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click",
() => {
    clearInterval(int);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00 : 00 : 00";

});

function displayData(){
    seconds++;
    if(seconds==60){
          seconds=0;
          minutes++;   
          if(minutes == 60){
              minutes = 0;
              hours++;
          }
      }
      
      
          let h  = hours < 10 ? "0" + hours : hours ;
          let m  = minutes < 10 ? "0" + minutes : minutes ;
          let s  = seconds < 10 ? "0" + seconds : seconds ;
      
          displayTime.innerHTML = `${h} : ${m} : ${s}`;
}