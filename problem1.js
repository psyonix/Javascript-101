//this is my solution to the first problem on projecteuler.net (Multiples of 3 and 5)
var num = 1000;
var multiples = [];
var sum = 0;

//this grabs every number that is a multiple of 3 & 5 and adds them to the array
for (i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
    }
}

//this takes each number in the array and adds them together
for (j = 0; j < multiples.length; j++) {
    sum += multiples[j];
}

//this prints the result
console.log(sum);
