//my solution to the second problem on projecteuler.net (Even Fibonacci numbers)
var num = 4000000;
var fib = [];
var x = 0;
var y = 1;
var sum = 0;

//this calculates every number in the sequence, checks to see if they are even (and less than 4,000,000), then adds them to the array
for (i = 1; i <= num; i++) {
    n = x + y;
    x = y;
    y = n;
    if (n < num && n % 2 === 0) {
        fib.push(n);
    }
}

//this takes each number in the array and adds them together
for (j = 0; j < fib.length; j++) {
    sum += fib[j];
}

console.log(sum);