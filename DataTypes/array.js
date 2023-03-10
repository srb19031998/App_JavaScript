var w1 = "apple";
var e2 = "banana";
var g3 = "cat";
console.log(w1, e2);
var fruits = ['banana', 'apple', 'Sapota', 'pappaya'];
console.log(fruits);
console.log(fruits[3]);
fruits.map(function (a) { console.log("advance map", a); });
var myitems = [
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', c: 'cat', d: 'dog' }
];
var val = myitems.find(function (item) { return item.c == 'cat'; });
console.log(val);
