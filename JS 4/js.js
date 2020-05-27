function squareOfTriangle (a, b, c) {
    var p;
    p = (a + b + c)/2;
    return Math.sqrt (p  * (p - a)* (p - b)* (p - c));
}

var a = 3, b = 4, c = 5;
console.log (squareOfTriangle(a, b, c));

var a = 2, b = 4, c = 4;
console.log (squareOfTriangle(a, b, c));

var a = 3, b = 6, c = 6;
console.log (squareOfTriangle(a, b, c));
