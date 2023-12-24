const days=document.getElementById('days');
const hours=document.getElementById('hours');
const mins=document.getElementById('mins');
const secs=document.getElementById('secs');

const formatTime= (time) => {
    return time < 10 ? `0${time}` : time;
}

const updateCountDown = (deadline) => {
    const currentTime= new Date();
    const timeDifference= deadline-currentTime;
    //calculate days, hours,mins,secs from timedifference
    let calSecs= Math.floor(timeDifference/1000) % 60;
    let calMins= Math.floor(timeDifference/1000/60) % 60;
    let calHours= Math.floor(timeDifference/1000/60/60) % 24;
    let calDays= Math.floor(timeDifference/1000/60/60/24);
    
    days.textContent=formatTime(calDays);
    secs.textContent=formatTime(calSecs);
    mins.textContent=formatTime(calMins);
    hours.textContent=formatTime(calHours);

    
}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
}

const targetDate= new Date("January 01 2024 12:00");
countDown(targetDate);