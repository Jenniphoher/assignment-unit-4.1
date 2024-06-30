console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'


function hello() {
  return 'Hello World!';
}


// Call the function to test


console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'


function helloName(name) {
  return 'Hello, ' + name + '!';
}


// Remember to call the function to test


console.log(helloName('Jennifer'));


// 3. Function to add two numbers together & return the result


function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}

console.log('The answer is:', addNumbers(3, 5));


// 4. Function to multiply three numbers & return the result


function multiplyThree(num0, num1, num2) {
  let answer = num0 * num1 * num2;
  return answer;
}

console.log('The answer is:', multiplyThree(5, 3, 9));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise


function isPositive(number) {
  console.log('Number is:', number);
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

console.log('The number is positive:', isPositive(17));


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.


let arrayOne = [1, 2, 3, 4];
let arrayTwo = [];

function getLast(array) {
  if(array.length > 0) {
    let lastItem = array.pop();
    return lastItem;
  } else {
    return 'undefined';
  }
}

console.log('What was deleted:', getLast(arrayOne));
console.log('What was deleted:', getLast(arrayTwo));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

console.log('------ FIND ------');

let arrayThree = [2, 6, 15, 50, 78, 234];

function lookFor(value, array) {
  console.log('The value is:', value, 'and wants to be found in:', array);
  for(num of array) {
    if (num === value) {
      return true;
    } // ends IF
  } return false; // ends FOR
} // ends find()

console.log('The value exists:', lookFor(2, arrayThree));
console.log('The value exists:', lookFor(78, arrayThree));
console.log('The value exists:', lookFor(127, arrayThree));

console.log('------ FIND END ------');


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise



function isFirstLetter(letter, string) {
  console.log('The letter is:', letter, 'and the word is:', string);
  let wordSplit = string.split('');
  for(splitLetter of wordSplit) {
    if(splitLetter === letter) {
      return true;
    } else {
      return false;
    }
  } 
}

console.log('The letter matches the first letter:', isFirstLetter('E', 'Everything'));
console.log('The letter matches the first letter:', isFirstLetter('e', 'Everything'));
console.log('The letter matches the first letter:', isFirstLetter('S', 'Everything'));


// 9. Function to return the sum of all numbers in an array


function sumAll(array) {
  console.log('The numbers in this array is:', array);
  let sum = 0;
  let i = 0;
  while(i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

console.log('The sum of all the numbers is:', sumAll(arrayThree));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


console.log('----------- PROBLEM STARTS -----------');

let userNumbers = prompt('Enter 6 random numbers separated with a comma:');
let randomNumbers = userNumbers.split(',').map(Number);  
console.log(randomNumbers);

function allPositive(numbers) {
  console.log('Returns all positive numbers.');
  let onlyPositive = []; // =======> QUESTION! <======= Why does this need to be inside function? Doesn't green checkmark when outside function even if function working
   for(let num of numbers) {
      if(num > 0) {
        onlyPositive.push(num);
      } 
    } return onlyPositive;
  }

let positiveNumbers = allPositive(randomNumbers);
console.log('The new array is:', positiveNumbers);

console.log('----------- PROBLEM ENDS -----------');



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

console.log('------ CODEWARS ------');

// We write a function that returns true if the 1st string ends exactly with the 2nd string and false if not.

function solution(str, ending) {
    let end = ending.slice(ending.length - ending.length);
    let string = str.slice(str.length - ending.length);
    console.log(`This is ${end} and this is ${string}`);
    if(end === string) {
      return true;
    } else {
      return false;
    }
}

console.log(solution('abcde', 'cde'));
console.log(solution('abcde', 'tyui'));


console.log('------ CODEWARS END ------');


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    lookFor,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
