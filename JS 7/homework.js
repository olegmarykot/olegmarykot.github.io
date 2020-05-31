// Мінімальне значення, максимальне, сума позитивних, добуток негативних, кількість позитивних і негативних
var arr = [2, -3, -28, 1, 5, 10, -11, 13, 23, 4];

var min = arr[0];
for ( var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log (min);

var max = arr[0];
for ( var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log (max);

var maxx = 0;
for ( var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        maxx = maxx + arr[i];
    }
}
console.log (maxx);

var minn = 1;
for ( var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        minn = minn * arr[i];
    }
}
console.log (minn);

var neg = [];
var pos = [];
for ( var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        neg.push(arr[i]);        
    }
    else {
        pos.push(arr[i]);
    }
}
console.log ("negative=", neg.length);
console.log ("positive=", pos.length);

// Підрахунок букв
function countSymbols (word) {
var result = {};
for (var i in word) {
    if (result.hasOwnProperty(word[i])) {
        result[word[i]]++;
    }
    else {
        result[word[i]]=1;
    }
}

return result;
}

var word = "abracadabra"
countSymbols (word);

// Перемішати вміст
function ShuffleArray(array) {
    array.sort(function() {
        return (0.5 - Math.random());
    });
    return array;
}

var array = ["apple", "banana", "melon", "pear"];

console.log(array);
console.log(ShuffleArray(array));

//кількість парних і непарних чисел
function oddEven (number){
var result = {
    odd: 0,
    even: 0
};
var count = number.toString();
for ( i = 0; i < count.length; i++) {
    if (Number(count[i]) % 2 == 0) {
        result.even++;
    }
    else {
        result.odd++;
    }
}
return result;
}

//числа фібоначчі
function Fibonacci (num){
    if (num > 0) {
    var result = [];
    var a=1;
    for (i = 0; i < num; i++){
    if (result.length < 2) {
        result.push(a);
    }
    else {
    a = result[i-1] + result [i-2];
    result.push(a);
    }
}
    }
    else {
        console.log("null")
    }
return result;
    }
console.log (Fibonacci(7));
