const hourElement = document.querySelector('.js-hours');
const minutesElement = document.querySelector('.js-mins');
const secondsElement = document.querySelector('.js-sec');
const lapGridElement = document.querySelector('.js-lap-grid')

const startButtonElement = document.querySelector('.js-start-btn');
const resetButtonElement = document.querySelector('.js-reset-btn');
const addLapButtonElement = document.querySelector('.js-addlap-btn')

const time = {    
    hour : '00',
    minutes : '00',
    seconds : '00'
};
let intervalId;
let isStart=false;
startButtonElement.addEventListener('click', ()=>{
    if(!isStart){
        startButtonElement.classList.add('red-btn');
        isStart=true;
    startButtonElement.innerHTML = 'Stop'
    clearInterval(intervalId);

    intervalId = setInterval(() => {
        hourElement.innerHTML = `${time.hour}:`;
        minutesElement.innerHTML = `${time.minutes}:`;
        secondsElement.innerHTML = `${time.seconds}`;
        document.title = `${time.minutes} : ${time.seconds} - Online Stop Watch`;
        time.seconds++;
        if(time.seconds === 60){
            time.minutes++;
            time.seconds = 00;
        }
        if(time.minutes === 60){
            time.hour++;
            time.minutes = 00;
        }
    }, 1000);
}
else{
    changeState();
}
});
let html='';

resetButtonElement.addEventListener('click',()=>{
if(time.hour != '00' || time.minutes != '00' || time.seconds != '00'){
    if(confirm('Are you sure you want to reset the stopwatch?')){
        time.hour='00';
        time.minutes='00';
        time.seconds='00';
        hourElement.innerHTML = time.hour + ':';
        minutesElement.innerHTML = time.minutes + ':';
        secondsElement.innerHTML = time.seconds;
        if(isStart){
            changeState();
        }
        html = '';
        lapGridElement.innerHTML= html;
        lapGridElement.classList.add('none');
        document.title = 'Online Stop Watch';
        }}
})
function changeState(){
    startButtonElement.classList.remove('red-btn');
        startButtonElement.innerHTML = 'Start';
        isStart=false;
        clearInterval(intervalId);
}
let i = 1;
addLapButtonElement.addEventListener('click',()=>{
    if(isStart){
        lapGridElement.classList.remove('none');
        html += `<div class="lap-grid-items"> Lap${i}</div>
        <div class="lap-grid-items"> ${time.hour} </div>
        <div class="lap-grid-items"> ${time.minutes}</div>
        <div class="lap-grid-items"> ${time.seconds-1}</div>`;
    console.log(html);
    i++;
    lapGridElement.innerHTML = html;
    }
})
