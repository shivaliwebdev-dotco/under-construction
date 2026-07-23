/*=========================================
        COUNTDOWN TIMER
=========================================*/

// Launch Date - 10 September 2026
const launchDate = new Date("September 10, 2026 00:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".countdown").innerHTML = `
            <h2 style="
            grid-column:1/-1;
            color:#FFD54F;
            font-size:40px;
            ">
            🎉 We Are Open!
            </h2>
        `;
    }

}, 1000);

/*=========================================
        NEWSLETTER VALIDATION
=========================================*/

const form = document.getElementById("subscribeForm");

const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {

        message.style.color = "#ff4d4d";

        message.innerHTML = "Please enter your name.";

        return;
    }

    if (name.length < 3) {

        message.style.color = "#ff4d4d";

        message.innerHTML =
            "Name should contain at least 3 characters.";

        return;
    }

    if (email === "") {

        message.style.color = "#ff4d4d";

        message.innerHTML =
            "Please enter your email address.";

        return;
    }

    if (!emailPattern.test(email)) {

        message.style.color = "#ff4d4d";

        message.innerHTML =
            "Please enter a valid email address.";

        return;
    }

    message.style.color = "#7CFC00";

    message.innerHTML =
        "🎉 Thank you for subscribing! We'll notify you when we launch.";

    form.reset();

});

/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
        DESSERT CARD ANIMATION
=========================================*/

const items = document.querySelectorAll(".item");

items.forEach(item => {

    item.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-10px) scale(1.08) rotate(2deg)";

    });

    item.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0) scale(1) rotate(0deg)";

    });

});

/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const button = document.querySelector("#subscribeForm button");

button.addEventListener("click", function () {

    button.style.transform = "scale(.95)";

    setTimeout(function () {

        button.style.transform = "scale(1)";

    }, 150);

});

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("🍰 Dessert Heaven Website Loaded Successfully!");