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
