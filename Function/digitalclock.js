var myele = document.getElementById("root");
var sec = 0;
var min = 0;
setInterval(function () {
    myele.innerHTML = "hours:00-minutes:".concat(min, "-seconds:").concat(sec);
    if (sec == 10) {
        min++;
        sec = 0;
    }
    console.log(sec);
    sec++;
}, 1000);
