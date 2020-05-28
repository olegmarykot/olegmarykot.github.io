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
