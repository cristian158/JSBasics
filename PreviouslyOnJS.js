var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

///////////////////////////////////////////////////////////////////////////////////////////

var a = 0
var b = 15
var a = b++
console.log(a); // gives 15
console.log(b); // gives 16

var c = 0
var d = 10
var c = ++b
console.log(c); // gives 11
console.log(d); // gives 11

///////////////////////////////////////////////////////////////////////////////////////////

var myStr = "Jello World";
myStr = "Hello World";

///////////////////////////////////////////////////////////////////////////////////////////

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

///////////////////////////////////////////////////////////////////////////////////////////

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My " + myNoun + " is " + myAdjective + ' and ' + myVerb + " over you " + myAdverb;

///////////////////////////////////////////////////////////////////////////////////////////

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); // removes [0]
var removedFromMyArray = myArray.pop();   // removes [-1]

var myArray = [["John", 23], ["dog", 3]];
myArray.unshift(["Paul", 35])             // adds element at the beginning
myArray.push(["Paul", 35])                // adds element at the end

///////////////////////////////////////////////////////////////////////////////////////////

function myLocalScope() {
  // var or const seem to work
  const myVar = "fa";
  console.log('inside myLocalScope', myVar); // outputs completely and correctly
}
myLocalScope();
console.log('outside myLocalScope', myVar); // gives error

///////////////////////////////////////////////////////////////////////////////////////////

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = 'sweater';
  return outerWear;
}
console.log(outerWear);  // returns T-shirt
console.log(myOutfit()); // returns sweater
console.log(outerWear);  // returns T-shirt

///////////////////////////////////////////////////////////////////////////////////////////

var sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum += 5;
}
addThree();           // returns value of undefined cause lack of return statement, changes global 'sum'
addFive();            // returns value of undefined cause lack of return statement, changes global 'sum'

///////////////////////////////////////////////////////////////////////////////////////////

var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

///////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal"; // !=
}

testEqual(10);

///////////////////////////////////////////////////////////////////////////////////////////

function testLogicalAnd(val) {
  if (val<=50 && val>=25) {       // yes if lessequal 50 or greaterequal 25; (25 <= val <= 50);
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

///////////////////////////////////////////////////////////////////////////////////////////

function testLogicalOr(val) {
  if (val<10 || val>20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

///////////////////////////////////////////////////////////////////////////////////////////

function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }  else {
    result = "5 or Smaller";
  }
  return result;
}Five
testElse(4);

///////////////////////////////////////////////////////////////////////////////////////////

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}
testElseIf(7);
// OR
function testElseIf(val) {
  if (val > 10) {return "Greater than 10";}
  else if (val < 5) {return "Smaller than 5";}
  else {return "Between 5 and 10";}
}
testElseIf(7);						// returns 'Between 5 and 10'

///////////////////////////////////////////////////////////////////////////////////////////

function orderMyLogic(val) {		// order of statements, matter
  if (val < 5) {return "Less than 5";}
  else if (val < 10) {return "Less than 10";}
  else {return "Greater than or equal to 10";}
}
orderMyLogic(7);					//returns 'Less than 10'

///////////////////////////////////////////////////////////////////////////////////////////

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {return names[0]}
  else if (strokes <= (par -2)) {return names[1];}
  else if (strokes == (par - 1)) {return names[2];}
  else if (par == strokes) {return names[3];}
  else if (strokes == (par + 1)) {return names[4];}
  else if (strokes == (par + 2)) {return names[5];}
  else if (strokes >= (par + 3)) {return names[6];}
  return "Change Me";
}
golfScore(5, 4);					// returns 'Birdie'

///////////////////////////////////////////////////////////////////////////////////////////

// switch evaluates strict equality
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1: answer = 'alpha'; break;
    case 2: answer = 'beta'; break;
    case 3: answer = 'gamma'; break;
	case 4:
	case 5:
		answer = 'etc'
    default:
      answer = 'another letter';
      break;
  }
  return answer;
}
caseInSwitch(1);					// returns 'alpha' after inputting '1'
									// 4 & 5 returns 'etc'
///////////////////////////////////////////////////////////////////////////////////////////

function switchOfStuff(val) {
  let answer = "";
  switch(val){
    case 'a': answer = 'apple'; break;
    case 'b': answer = 'bird'; break;
    case 'c': answer = 'cat'; break;
    default: answer = 'stuff'; break;
  }
  return answer;
}

///////////////////////////////////////////////////////////////////////////////////////////

function sequentialSizes(val) {
	let answer = "";
	switch(val){
	  case 1: case 2: case 3: answer = 'Low'; break;
	  case 4: case 5: case 6: answer = 'Mid'; break;
	  case 7: case 8: case 9: answer = 'High'; break;
	}
	return answer;
}

///////////////////////////////////////////////////////////////////////////////////////////

function isLess(a, b) {
    return a < b;
}
isLess(10, 15);						// returns true, avoids if else statement chain

///////////////////////////////////////////////////////////////////////////////////////////

function myFun() {
  console.log("Hello");				// displays in the console
  return "World";					// returns the string 'World'
  console.log("byebye")				// won't display, func exits at return
}
myFun();

///////////////////////////////////////////////////////////////////////////////////////////

var count = 0;
function cc(card) {					// blackjackish, create card counting table
	if (card >= 7 && card <= 9) {count += 0; }
	else if (card >= 2 && card <= 6) {count++;}
	else {count--;}
	if (count <= 0) {return count + " Hold";}
	else {return count + " Bet";}
}
cc(2); cc(3); cc(7); cc('K'); cc('A');	// for a sequence of cards

// or

let count = 0;
function cc(card) {
  switch (card){
    case 2: case 3: case 4: case 5: case 6: count++; break;
    case 7: case 8: case 9: count; break;
    default: count--;break;
  }
  if (count > 0) {return count + ' Bet'}
  else {return count + ' Hold'}
  return "Change Me";
}


///////////////////////////////////////////////////////////////////////////////////////////

var myDog = {
  name: "Antuan",					// we can use numbers or quoteless sigle-word strings as properties
  "legs": 4,
  "tails": 1,
  "friends": ["Jules", "Universal Consciousness"],
  "lethal enemy": "solitude"
};
var tailQuantity = myDog.tails;		// dot notation to set variable equal to an object's property
myDog["lethal enemy"];				// bracket notation to read and object's property
myDog.tails = 3;					// changes the value of 'tails' property of myDog object
myDog.bark = 'woof';				// adds a new property 'bark' to myDog object
delete myDog.legs;					// deletes property 'legs'

///////////////////////////////////////////////////////////////////////////////////////////

var someObj = {						// obj
  propName: "John"					// proName property of value "John"
};
function propPrefix(str) {			// argument str
  var s = "prop";
  return s + str;					// returns "propstr"
}
var someProp = propPrefix("Name");	// == 'propName'
console.log(someObj[someProp]);		// someObj.propName; displays string 'John' in the console

///////////////////////////////////////////////////////////////////////////////////////////

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];   // sets player's name to the [playerNumber] property of testObj

///////////////////////////////////////////////////////////////////////////////////////////

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// two ways of updating a property's value of an Object
myDog.name = "Happy Coder";
myDog['name'] = 'Happy Coder';
// 2 ways of adding a new property
myDog.bark = "woof";
myDog['bark'] = 'woof';
// to delete a property
delete myDog.legs;

///////////////////////////////////////////////////////////////////////////////////////////

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2];							// 2 is the property not the position, returns 'Y'
alpha[24];							// returns 'C'

var value = 2;
alpha[value];						// in this case returns string 'Y'

///////////////////////////////////////////////////////////////////////////////////////////

// from Switch statement to object
function phoneticLookup(val) {
  var result = "";
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  return result;
}
phoneticLookup("charlie");

// object
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  return result;
}
phoneticLookup("charlie");

///////////////////////////////////////////////////////////////////////////////////////////

function checkObj(obj, checkProp) {
  var result = obj.hasOwnProperty(checkProp);
  if (result == true) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
// ALTERNATIVE SOLUTION
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
  }
  return "Not Found";
}
//ALTERNATIVE SOLUTION
function checkObj(obj, checkProp) {
 return (obj.hasOwnProperty(checkProp)) ? obj[checkProp] : "Not Found";

 ///////////////////////////////////////////////////////////////////////////////////////////

const myMusic = [
  {
	  "artist": "Billy Joel",
	  "title": "Piano Man",
	  "release_year": 1973,
	  "formats": [
		   "CD",
		   "8T",
		   "LP"
		 ],
	  "gold": true
  },
  {
	  "artist": "Daft Punk",
	  "title": "Homework",
	  "release_year": 1997,
	  "formats": [
		"CD",
		"Cassette",
		"LP"
	  ],
   }
];

///////////////////////////////////////////////////////////////////////////////////////////
// acces myStorage and assign the contents of "glove box" to the variable gloveBoxContents
 const myStorage = {
   "car": {
     "inside": {
       "glove box": "maps",
       "passenger seat": "crumbs"
      },
     "outside": {
       "trunk": "jack"
     }
   }
 };
const gloveBoxContents = myStorage.car.inside['glove box']; // returns 'maps'

///////////////////////////////////////////////////////////////////////////////////////////

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1]; // to access 'pine'
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
