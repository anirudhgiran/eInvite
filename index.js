const countdownTo = '2026-06-24T01:00:00.000+05:30'

// Get the countdown clock items
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

console.log(new Date(countdownTo).toLocaleString('en', {
    timeZone: 'Asia/Kolkata'
}))

const setCountdown = () => {
    let time = getTimeParts(countdownTo)

    days.innerText = time.days;
    hours.innerText = time.hours;
    minutes.innerText = time.minutes;
    seconds.innerText = time.seconds;
}


setInterval(() => {

    setCountdown();

}, 1000);

const getTimeParts = (targetDate) => {
    const now = Date.now();
    let diff = new Date(targetDate).getTime() - now;

    if (diff < 0) diff = 0; // event passed

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
    };
}

