var a, b, c, x1, x2, d;
a = 2, b = 7, c = 5;
d = b * b - 4 * a * c;
console.log("D=", d);

if (d>=0) {
    x1 = (-b - Math.sqrt(d))/(2 * a);
    x2 = (-b  +Math.sqrt(d))/(2 * a);
    console.log("x1=", x1);
    console.log("x2=", x2);
}

else {
    console.log("there is no answer");
}

var age = prompt ('please enter your age', 0);
if (age < 18) {
    alert ('You are underage');    
}

else {
    alert ('You are adult');    
}

