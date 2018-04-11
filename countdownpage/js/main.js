const countdown = document.querySelector(".countdown");

//Set Opening Date.
const openingDate = new Date("Oct 1, 2018 18:00:00").getTime();

//Update every second.
const interval = setInterval(() => {
    //get todays date and time in ms.
    const now = new Date().getTime();
    //Distance from present until opening date.
    const distance = openingDate - now;
    //Time calculations.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //Display results
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
        `;
    //If launch date passed.
    if(distance < 0){
        //stops countdown.
        clearInterval(interval);
        //Style and output text.
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "We Are Open!";
    }
}, 1000);