var sec = 0
var min = 0
var hr = 0

var minText = document.getElementById("min")
var hrText = document.getElementById("hr")
var secText = document.getElementById("sec")

function startTimer(btn) {
    if (btn.id == "play") {
        btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        btn.id = "pause";
        timer()
    }
    else {
        btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        btn.id = "play";
    }
    console.log(btn.id);
}

function timer() {
    var second = setInterval(function () {
        sec++;

        if (sec == 60) {
            sec = 0;
        }
        
        if (sec < 10) {
            secText.innerHTML = `0${sec}`;
        } else {
            secText.innerHTML = sec;
        }
    }, 1000)

    var minute = setInterval(function () {
        if (min > 60) {
            min = 0;
        }
        
        min++;

        if (min < 10) {
            minText.innerHTML = `0${min}`;
        } else {
            minText.innerHTML = min;
        }
    }, 60000)

    var hour = setInterval(function () {
        hr++;
        if (hr < 10) {
            hrText.innerHTML = `0${hr}`;
        } else {
            hrText.innerHTML = hr;
        }
    }, 3.6e+6)
}