let currentState = "RESET";
let sessionType = "SESSION";
let startTime, endTime;
var countdown;


function increment(target){

    var value = parseInt(document.getElementById(target).value);
    value+=1;
    document.getElementById(target).value = value;
    if (currentState != "START"){
    document.querySelector('#minutes').innerHTML = String(value);}
}

function decrement(target){

    var value = parseInt(document.getElementById(target).value);
    if (value > document.getElementById(target).min){ value-=1; }
    
    document.getElementById(target).value = value;

    if (currentState != "START"){
    document.querySelector('#minutes').innerHTML = String(value);}
    
}

// Timer. 



const displayTimeLeft = (currentTimeLeft) => {
    const secondsLeft = currentTimeLeft;
    let result = '';
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    const hours = parseInt(secondsLeft / 3600);

    function addZeroes(time) {
        return time < 10 ? `0${time}`: time;
    }

    if (hours > 0) result += `${hours}:`
    result += `${addZeroes(minutes)}: ${addZeroes(seconds)}`

    document.querySelector('#minutes').innerHTML = String(addZeroes(minutes))
    document.querySelector('#seconds').innerHTML = String(addZeroes(seconds))

}

const disableFunctions = () => {
    document.getElementById("sessionInput").disabled = true;
    document.getElementById("breakInput").disabled = true;

    document.getElementById("start").style.display = "none";
    document.getElementById("resume").style.display = "block";
    document.getElementById("pause").style.display = "block";

    document.getElementById("incrSession").disabled = true;
    document.getElementById("decrSession").disabled = true;
    document.getElementById("incrBreak").disabled = true;
    document.getElementById("decrBreak").disabled = true;
}

const enableFunctions = () => {
    document.getElementById("sessionInput").disabled = false;
    document.getElementById("breakInput").disabled = false;

    document.getElementById("start").style.display = "block";
    document.getElementById("resume").style.display = "none";
    document.getElementById("pause").style.display = "none";

    document.getElementById("incrSession").disabled = false;
    document.getElementById("decrSession").disabled = false;
    document.getElementById("incrBreak").disabled = false;
    document.getElementById("decrBreak").disabled = false;
}


const startTimer=() =>{
    currentState = "START";
    let minVal,secVal;
    document.getElementById("sessionType").innerHTML = sessionType
    if (sessionType == "SESSION"){
        minVal = parseInt(document.querySelector('#sessionInput').value);
        secVal = 0;
    }else if(sessionType == "BREAK"){
        minVal =  parseInt(document.querySelector('#breakInput').value);
        secVal = 0;
    }
    console.log(minVal, secVal)
    
    disableFunctions();
    let currentTimeLeft = (60*minVal) + secVal; 

    countdown = setInterval(() => {
        if (currentTimeLeft == 0) {
            clearInterval()
        } else {
         currentTimeLeft--;
        
        }
        
        displayTimeLeft(currentTimeLeft);

        if (sessionType == "SESSION" && currentTimeLeft == 0){
            sessionType = "BREAK";
            resetTimer();
            startTimer();
        }else if (sessionType == "BREAK" && currentTimeLeft == 0){
            sessionType = "SESSION";
            resetTimer();
            startTimer();
        }

}, 1000)

 
}

function pauseTimer() {
    currentState = "PAUSE";
    clearTimeout(countdown);
}

function resumeTimer() {
    startTimer();
}

function resetTimer() {
    currentState = "RESET";
    enableFunctions();
    clearTimeout(countdown);
    document.querySelector('#minutes').innerHTML = "00";
    document.querySelector('#seconds').innerHTML = "00";
    console.log(document.getElementById("workInput").value)
   document.getElementById("summary").innerHTML += "<span>" + document.getElementById("workInput").value + "<br></span>"
}

start.addEventListener("click",startTimer,false);
pause.addEventListener("click", pauseTimer, false);
resume.addEventListener("click", resumeTimer, false);
reset.addEventListener("click", resetTimer,false)