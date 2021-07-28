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



function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


function testLogicalAnd(val) {
  if (val<=50 && val>=25) {       // yes if lessequal 50 or greaterequal 25
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);


function testLogicalOr(val) {
  if (val<10 || val>20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);


function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }  else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);


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


function orderMyLogic(val) {		// order of statements, matter
  if (val < 5) {return "Less than 5";}
  else if (val < 10) {return "Less than 10";}
  else {return "Greater than or equal to 10";}
}
orderMyLogic(7);					//returns 'Less than 10'


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= (par -2)) {
    return names[1];
  } else if (strokes == (par - 1)) {
    return names[2];
  } else if (par == strokes) {
    return names[3];
  } else if (strokes == (par + 1)) {
    return names[4];
  } else if (strokes == (par + 2)) {
    return names[5];
  } else if (strokes >= (par + 3)) {
    return names[6];
  }
  return "Change Me";
}
golfScore(5, 4);					// returns 'Birdie'


function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
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


function isLess(a, b) {
    return a < b;
}
isLess(10, 15);						// returns true


function myFun() {
  console.log("Hello");				// displays in ythe console
  return "World";					// returns the string 'World'
  console.log("byebye")				// won't display, func exits at return
}
myFun();



var count = 0;
function cc(card) {					// blackjackish, create card counting table
	if (card >= 7 && card <= 9) {
		count += 0;
	} else if (card >= 2 && card <= 6) {
		count++;
	} else {
		count--;
	}
	if (count <= 0) {
		return count + " Hold";
	} else {
		return count + " Bet";
	}
}
cc(2); cc(3); cc(7); cc('K'); cc('A');	// for a sequence of cards
