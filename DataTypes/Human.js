var Human = /** @class */ (function () {
    function Human() {
        this.eyes = 2;
        this.legs = 2;
        this.hands = "two hands";
        this.head = true;
    }
    Human.prototype.witheyes = function () {
        console.log("we can watch");
    };
    return Human;
}());
var a1 = new Number();
console.log(a1);
var kavya = new Human();
console.log(kavya.witheyes());
