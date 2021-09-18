const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const minutes1 = document.getElementById("minutes");
const seconds1 = document.getElementById("seconds");

function countDown(){
    const newDate = new Date("nov 18,2022 13:48:45").getTime();
    const currentDate = new Date().getTime();

    const t = (newDate - currentDate)/1000;

    const days2 = Math.floor(t/3600/24);
    const hours2 = Math.floor(t/3600)%24;
    const minutes2 = Math.floor(t/60)%60;
    const seconds2 = Math.floor(t)%60;

    days1.innerHTML = formatTime(days2);
    hours1.innerHTML = formatTime(hours2);
    minutes1.innerHTML = formatTime(minutes2);
    seconds1.innerHTML = formatTime(seconds2);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown,1000);