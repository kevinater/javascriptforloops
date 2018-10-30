var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

for (var i = 0; i <prices.length; i++) {
sum += prices[i];
}

console.log("The sum is: ", sum);



for (var i = 99; i > 0; i--) {
console.log(i + " crows on the wall. " + i + " crows.");
console.log("1 fell down and became a wight.");
console.log(i-1 + " crows on the wall. ");
console.log("");

if (i === 1) {
  console.log("1 crow on the wall. 1 single crow.");
  console.log("It fell down and became a wight.");
  console.log("There's no one left to defend Westeros now.");
}

}
