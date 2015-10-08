//my solution to the third problem on projecteuler.net (Largest prime factor)
var num = 600851475143;
var n = 2;


//this iterates through the number, checking to see if it can be divided evenly or not. If it can't, the variable increments up to the next number. The loop runs until all prime numbers have been calculated, ending with the largest

while (n < num) {
    if (num % n === 0) {
        num /= n;
    } else {
        n++;
    }
}

console.log(n);