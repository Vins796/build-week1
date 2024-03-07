var countdownTime = 60 * 1000;

var countdownInterval = setInterval(function() {
    var seconds = Math.floor(countdownTime / 1000);
    var countdownElement = document.getElementById("countdown");
    var cerchio1Element = document.querySelector(".cerchio1");

    if (seconds <= 35 && seconds > 10) {
        cerchio1Element.style.borderColor = "yellow";
    } else if (seconds <= 10) {
        cerchio1Element.style.borderColor = "red"; 
    }

    var secondsElement = document.querySelector(".seconds");
    secondsElement.textContent = "00:" + seconds.toString().padStart(2, '0');
    countdownTime -= 1000;

    if (seconds === 0) {
        clearInterval(countdownInterval);
    }

}, 1000);