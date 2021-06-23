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

function myLocalScope() {
  var myVar = 'local';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();                             // outputs 'inside myLocalScope local'
console.log('outside myLocalScope', myVar); // outputs 'myVar undefined'


var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = 'sweater'
  return outerWear;
}
myOutfit();                   // outputs 'sweater', local variable overrides global


var sum = 0;
function addFive () {
  sum = sum + 5;
}
addFive();                    // outputs 'undefined' cause lack of return statement
                              // it changes the global var sum
