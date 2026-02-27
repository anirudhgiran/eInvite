const introCtr = document.querySelector('#intro-ctr');
const introVid = document.querySelector('#intro-vid');
const introCta = document.querySelector('#intro-cta');
const bgAud = document.querySelector('#bg-aud');
const bgAudWrapper = document.querySelector('.bg-aud-wrapper');
const speakerBtns = document.querySelectorAll('.speaker-btns');
const container = document.querySelector('.container');

let autoScroll = false;
let newScrollTo = 0;

introCtr.addEventListener('click', () => {
    bgAud.play();
    introCta.style.display = 'none';
    introVid.play();
    container.style.display = 'flex';
    setTimeout(() => {
        document.body.style.overflow = 'auto';
        introCtr.style.opacity = '0'
    }, 950);
    setTimeout(() => {
        introCtr.style.display = 'none';
    }, 1300)
    autoScroll = true;
})

document.addEventListener('mousemove', () => {
    autoScroll = false;
})
document.addEventListener('touchmove', () => {
    autoScroll = false;
})

setTimeout(() => {

    setInterval(() => {
        if (autoScroll) {
            newScrollTo += 50;
            window.scrollTo({ left: 0, top: newScrollTo, behavior: "smooth" });
        }
    }, 1000);

}, 3800);

bgAudWrapper.addEventListener('click', () => {
    bgAud.muted = !bgAud.muted;

    if (bgAud.muted) {
        speakerBtns[0].style.display = 'none';
        speakerBtns[1].style.display = 'block';
    } else {
        speakerBtns[0].style.display = 'block';
        speakerBtns[1].style.display = 'none';
    }
})

// Countdown logic

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
    hours.innerText = String(time.hours).padStart(2, '0');
    minutes.innerText = String(time.minutes).padStart(2, '0');
    seconds.innerText = String(time.seconds).padStart(2, '0');
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
