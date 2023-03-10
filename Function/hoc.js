var add = function (val1, val2) {
    return val1 + val2;
};
function calculator(arth) {
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    var showtotal = document.getElementById("total");
    if (arth == "+") {
        var a = parseInt(val1);
        var b = parseInt(val2);
        return showtotal.innerHTML = add(a, b);
    }
    console.log(calculator("-"));
}
