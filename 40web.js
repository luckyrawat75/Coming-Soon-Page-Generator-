let countDate = new Date("dec 26, 2024 7:50:00").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDate - now;

    let days1 = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours2 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes3 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds4 = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").children[0].innerHTML = days1;
    document.getElementById("hours").children[0].innerHTML = hours2;
    document.getElementById("minute").children[0].innerHTML = minutes3;
    document.getElementById("seconds").innerHTML = seconds4;

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".content").innerHTML = "We're Live!";
    }
}, 1000);