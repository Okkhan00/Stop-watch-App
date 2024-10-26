let [milliseconds, seconds, minutes] = [0, 0, 0];
let timeRef = document.getElementById("timedisplay")
let interval = null;

document.getElementById("startbtn").addEventListener("click", ()=>{
    if(interval !== null) return;
    interval = setInterval(Displaytime, 10);
});

document.getElementById("stopbtn").addEventListener("click", ()=>{
    clearInterval(interval)
    interval = null;
});

document.getElementById("resetbtn").addEventListener("click", ()=>{
    clearInterval(interval)
    interval = null;
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timeRef.innerHTML = `0: 0: 0`;
});


function Displaytime(){
    milliseconds += 10;
    if(milliseconds === 1000){
        milliseconds = 0,
        seconds ++;
       if(seconds === 60){
          seconds = 0,
          minutes ++;
        }
    }

    let m = minutes <10 ? `0`+ minutes : minutes ;
    let s = seconds <10 ? `0` + seconds :  seconds ;
    let ms = milliseconds <10 ? `00` + milliseconds : milliseconds <100 ? `0` + milliseconds : milliseconds;

    timeRef.innerHTML =    `${m}:${s}:${ms}`;
        
}

