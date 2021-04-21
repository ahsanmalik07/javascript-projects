let currentState = "RESET";
let sessionType = "SESSION";
var startTime, stopTime;
var countdown;


function increment(target){
    if (currentState == "RESET"){
        var value = parseInt(document.getElementById(target).value);
        value+=1;
        document.getElementById(target).value = value;
    
        document.querySelector('#minutes').innerHTML = String(value);
    }
}

function decrement(target){
    if (currentState == "RESET"){
        var value = parseInt(document.getElementById(target).value);
        if (value > document.getElementById(target).min){ value-=1; }
    
        document.getElementById(target).value = value;

    
        document.querySelector('#minutes').innerHTML = String(value);
    }
    
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
   
    let minVal,secVal;
    document.getElementById("sessionType").innerHTML = sessionType

    if (currentState == "RESET" && sessionType == "SESSION"){
        minVal = parseInt(document.querySelector('#sessionInput').value);
        secVal = 0;
    }else if(currentState == "RESET" && sessionType == "BREAK"){
        minVal =  parseInt(document.querySelector('#breakInput').value);
        secVal = 0;
    }
   
    if (currentState == "PAUSE"){
        minVal = parseInt(document.querySelector('#minutes').innerHTML);
        secVal = parseInt(document.querySelector('#seconds').innerHTML);;
    } 

    currentState = "START";

    disableFunctions();
    let currentTimeLeft = (60*minVal) + secVal; 

    countdown = setInterval(() => {
        if (currentTimeLeft == 0) {

            clearInterval()

        } else {
         currentTimeLeft--;
         if (currentTimeLeft <= 10){
            document.getElementById("minutes").style.color = "red";
            document.getElementById("seconds").style.color = "red";
         }
        }
        
        displayTimeLeft(currentTimeLeft);

        if (sessionType == "SESSION" && currentTimeLeft == 0){
            sessionType = "BREAK";
            resetValues();
            startTimer();
        }else if (sessionType == "BREAK" && currentTimeLeft == 0){
            sessionType = "SESSION";
            resetValues();
            startTimer();
        }

}, 1000)

 
}
function updateStartTime(){
   startTime = new Date();
   
}

function pauseTimer() {
    currentState = "PAUSE";

    document.getElementById("pause").style.display = "none";
    document.getElementById("resume").style.display = "block";

    clearTimeout(countdown);
}

function resumeTimer() {
    document.getElementById("resume").style.display = "none";
    startTimer();
}

function resetValues(){
    currentState = "RESET";
    clearTimeout(countdown);
    document.querySelector('#minutes').innerHTML = "00";
    document.querySelector('#seconds').innerHTML = "00";
    document.getElementById("minutes").style.color = "white";
    document.getElementById("seconds").style.color = "white";
}
function resetTimer() {
    currentState = "RESET";
    sessionType = "SESSION";

    stopTime = new Date();
    var totalTime = dateFns.distanceInWords(startTime, stopTime, {addSuffix: true})
    
    enableFunctions();
    clearTimeout(countdown);
    document.querySelector('#minutes').innerHTML = "00";
    document.querySelector('#seconds').innerHTML = "00";

    var taskName = document.getElementById("workInput").value;
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">${taskName} was completed ${totalTime}</li>`;
   document.getElementById("summary-list").innerHTML += html;
}

start.addEventListener("click",() =>{startTimer(); updateStartTime();},false);
pause.addEventListener("click", pauseTimer, false);
resume.addEventListener("click", resumeTimer, false);
reset.addEventListener("click", resetTimer,false)