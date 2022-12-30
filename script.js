const newYears = '1 Jan 2023';
const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minsEL = document.getElementById('minutes')
const secondsEL = document.getElementById('seconds')

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds =(newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds/3600/24);
    const seconds = Math.floor(totalseconds) %60;
    const hours = Math.floor(totalseconds/3600) % 24;
    const minutes = Math.floor(totalseconds/60) % 60;
    daysEL.innerHTML  = days;
    hoursEL.innerHTML    =  formatTime(hours);
    minsEL.innerHTML    = formatTime(minutes);
    secondsEL.innerHTML  =formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);
