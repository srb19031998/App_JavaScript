console.log("1");
setTimeout(function () {
    console.log("2");
}, 1000);
console.log("3");
var p1 = 10;
var p2 = 20;
var p3;
setTimeout(function () {
    p3 = 30;
    //console.log(p1+p2+p3)
}, 1000);
setTimeout(function () {
    // p3=30
    console.log(p1 + p2 + p3);
}, 2000);
console.log(p1 + p2 + p3);
