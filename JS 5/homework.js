var a;
a = 10;
if (a % 2 ==1) {
    console.log ('odd');
}

else {
    console.log ('even');
}

var sum = 0, prod = 1;

for (var i =0; i <= 10; i = i + 1) {
    sum = sum + i;
}
console.log (sum);

for (var i =1; i <= 10; i = i + 1) {
    prod = prod * i;
}
console.log (prod);

var sum=0, p = 0;
for (var i = 0; i <= 4; i++ ) {
    p = p + Math.pow (10, i);
    sum = sum + p;
}
console.log (sum);
