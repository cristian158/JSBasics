var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];


var myStr = "Jello World";
myStr = "Hello World";


var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];


var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My " + myNoun + " is " + myAdjective + ' and ' + myVerb + " over you " + myAdverb;


var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); // removes [0]
var removedFromMyArray = myArray.pop();   // removes [-1]


var myArray = [["John", 23], ["dog", 3]];
myArray.unshift(["Paul", 35])             // adds element at the beginning
myArray.push(["Paul", 35])                // adds element at the end


var sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}
addThree();           // returns value of undefined cause lack of return statement
addFive();            // returns value of undefined cause lack of return statement


var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);



function nextInLine(arr, item) {
  arr.push(item);                 //pushes item at the end of arr
  item = arr.shift();             //removes first item of arr
  return item;                    //returns removed item
}
var testArr = [1,2,3,4,5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
