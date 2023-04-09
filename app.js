// [ASSIGNMENT NO 1]:
// QUESTION NO 1 :
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
num1 = Number(num1);
num2 = Number(num2);
if (num1 > num2) {
  console.log(num1 + " is larger than " + num2);
} else if (num1 < num2) {
  console.log(num2 + " is larger than " + num1);
} else {
  console.log("The numbers are equal.");
}

// QUESTION NO 2 :
let num = prompt("Enter a number:");
num = Number(num);
if (num > 0) {
  alert("The sign is +");
} else if (num < 0) {
  alert("The sign is -");
} else {
  alert("The number is zero");
}

// QUESTION NO 3:
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
let number3 = prompt("Enter the third number:");
let number4 = prompt("Enter the fourth number:");
let number5 = prompt("Enter the fifth number:");

let max = Math.max(num1, num2, num3, num4, num5);
console.log("The largest number is: " + max);

// QUESTION NO 4:
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

// QUESTION NO 5:
let marks = [80, 65, 75, 92, 55];


let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
let average = sum / marks.length;
let grade;
if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}
console.log("The average marks is " + average.toFixed(2) + " and the grade is " + grade);

// QUESTION NO 6:

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
  


// QUESTION NO 7:
let numRows = 5;
for (let i = 1; i <= numRows; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}