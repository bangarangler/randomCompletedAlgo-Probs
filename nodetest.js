//console.log("Hello world");

//// Reverse Number
//function reverseNumber(num) {
//n = num.toString();
//return Number(
//n
//.split("")
//.reverse()
//.join("")
//);
//}

//console.log(reverseNumber(12345));

//// Reverse String
//function reverseString(str) {
//return str
//.split("")
//.reverse()
//.join("");
//}

//console.log(reverseString("CS rocks!"));

//// Longest String
//function longestString(arr) {
//let lg = 0;
//let longest;
//for (let i = 0; i < arr.length; i++) {
//if (arr[i].length > lg) {
//lg = arr[i].length;
//longest = arr[i];
//}
//}
//return longest;
//}

//const strings1 = ["short", "really, really long!", "medium"];
//console.log(longestString(strings1));

// REVERSE CASE

//function reverseCase(str) {
//str = str.split("");

//for (let i = 0; i < str.length; i++) {
//if (str[i] === str[i].toUpperCase()) {
//str[i] = str[i].toLowerCase();
//} else if (str[i] === str[i].toLowerCase()) {
//str[i] = str[i].toUpperCase();
//}
//}

//return str.join("");
//}

//console.log(reverseCase("HELLO world!"));

// Common Elements

//function commonElements(arr1, arr2) {
//return arr1.filter(Set.prototype.has, new Set(arr2));
//}

//console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));

//console.log(commonElements(["a", "b", "c"], ["x", "y", "z", "a"]));

// convert to camel case

//function toCamelCase(str) {
//return str.replace(/[-_]([a-zA-Z])/g, function(g) {
//return g[1].toUpperCase();
//});
//}
//function toCamelCase(str) {
//let words = str
//.split("-")
//.join(",")
//.split("_")
//.join(",")
//.split(",");

//for (i = 1; i < words.length; i++) {
//words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//}

//str = words.join("");
//return str;
//}
//console.log(toCamelCase("the-stealth-warrior"));
//console.log(toCamelCase("The_Stealth_Warrior"));

// Sort Strings

//function sortString(str) {
//return str
//.split("")
//.sort()
//.join("");
//}

//console.log(sortString("AzycxbCwBaB"));

//SOMEONE MESSED UP IMPLEMENTATION OF ATTRIBUTES AND PROTOTYPES ISN'T WORKING
//HELP DEBUG code was horrible. i fixed it so you can't really see it here
//function Parent(attributes) {
//this.gender = attributes.gender;
//this.age = attributes.age;
//this.name = attributes.name;
//this.homeTown = attributes.homeTown;
//}

//Parent.prototype.yabbaDabba = function() {
//return "Yabba dabba doo!";
//};

//Parent.prototype.speak = function() {
//return `Hello, my name is ${this.name}`;
//};

//const fred = new Parent({
//gender: "Male",
//age: 35,
//name: "Fred",
//homeTown: "Bedrock"
//});

//const wilma = new Parent({
//gender: "Female",
//age: 37,
//name: "Wilma",
//homeTown: "Bedrock"
//});

//function Child(childAttributes) {
//Parent.call(this, childAttributes);
//this.isChild = childAttributes.isChild;
//}

//Child.prototype = Object.create(Parent.prototype);

//Child.prototype.checkIfChild = function() {
//if (this.isChild === true) {
//return `My name is ${this.name}.\nAm I a child?  ${
//this.isChild
//}.\nAm I a Parent? ${this.isChild}.`;
//}
//};

//const pebbles = new Child({
//gender: "Female",
//age: 3,
//name: "Pebbles",
//homeTown: "Bedrock",
//isChild: true
//});

//console.log("*******PARENT*********");
//console.log(`1. ${fred.name}`);
//console.log("2. " + fred.speak());
//console.log(`3. ${wilma.name}`);
//console.log(`4. ${wilma.speak()}`);

//console.log("*******CHILD*********");
//console.log(`5. ${pebbles.name}`);
//console.log(`6. ${pebbles.speak()}`);
//console.log(`7. ${pebbles.checkIfChild()}`);
//console.log(`8. ${pebbles.yabbaDabba()}`);

//MAKE STACK CLASS AND GIVE IT TWO METHODS TO ADD AND REMOVE ADD WILL PUSH ITEM
//INTO STORAGE. REMOVE WILL EMOVE LAST ITEM IN STORAGE. ADD METHOD TO STACK
//CLASS NUMOFITEMS. IF NO ITEMS STORAGE RETURN MESSAGE, IF ITEMS RETURN NUMBER
////OF ITEMS
//class Stack {
//constructor() {
//this.storage = [];
//}

//add(item) {
//this.storage.push(item);
//}

//remove() {
//this.storage.pop();
//}

//numOfItems(storage) {
//if (this.storage.length === 0) {
//return `There are no items in your stack.`;
//} else {
//return this.storage.length;
//}
//}
//}

//const myStack = new Stack();
//console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."
//myStack.add("first");
//myStack.add("second");
//myStack.add("third");
//console.log(myStack.numOfItems()); // <--- 3
//console.log(myStack.storage); // <--- [ 'first', 'second', 'third' ]
//myStack.remove();
//console.log(myStack.storage); // <--- [ 'first', 'second' ]
//myStack.remove();
//console.log(myStack.storage); // <--- [ 'first' ]
//myStack.remove();
//console.log(myStack.storage); // <--- []
//console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."

//WRITE A FUNCTION THAT COUNTS THE NUMBER OF VOWELS IN A GIVEN STRING.
//RETURN THE COUNT NUMBER
//function vowelCount(str) {
//let letter = str.match(/[aeiou]/gi);
//return letter === null ? 0 : letter.length;
//}

////const vowelCount = str =>
////Array.from(str).filter(letter => "aeiou".includes(letter)).length;

//console.log(vowelCount("-bcd-fgh-pqrst-vwxyz"));
//console.log(vowelCount("Hello world!")); // <--- 3
//console.log(vowelCount("Pinto beans")); // <--- 4
//console.log(vowelCount("The quick brown fox jumped over the lazy dog.")); // <--- 12
//console.log(
//vowelCount(
//"Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal."
//)
//); // <--- 58
//console.log(vowelCount("All I have ever wanted is to be an Uber driver!")); // <--- 16

// GIVEN A POSITIVE (OR0) NUMVER, RETURN STRING OF 1'S AND 0'S REPRESENTING IT'S
// BINARY VALUE: TOBINARYSTRING(6) SHOULD RETURN "110" NO LEADING 0.  USE OF
// NUMVER.TOSTRING(2) IS NOT ALLOWED

//function toBinaryString(num) {
//let changed = [];
//if (num !== 0) {
//while (num >= 1) {
//changed.unshift(num % 2);
//num = Math.floor(num / 2);
//}
//return changed.join("");
//} else {
//return "0";
//}
//}
//console.log(toBinaryString(0)); // <--- 0
//console.log(toBinaryString(1)); // <--- 1
//console.log(toBinaryString(2)); // <--- 10
//console.log(toBinaryString(3)); // <--- 11
//console.log(toBinaryString(4)); // <--- 100
//console.log(toBinaryString(5)); // <--- 101
//console.log(toBinaryString(6)); // <--- 110
//console.log(toBinaryString(7)); // <--- 111
//console.log(toBinaryString(8)); // <--- 1000
//console.log(toBinaryString(9)); // <--- 1001
//console.log(toBinaryString(10)); // <--- 1010
//console.log(toBinaryString(11)); // <--- 1011
//console.log(toBinaryString(12)); // <--- 1100
//console.log(toBinaryString(13)); // <--- 1101
//console.log(toBinaryString(14)); // <--- 1110
//console.log(toBinaryString(15)); // <--- 1111
//console.log(toBinaryString(16)); // <--- 10000

//ROMAN NUMBER FUNCTION
//let romanIndex = [
//[1000, "M"],
//[900, "CM"],
//[500, "D"],
//[400, "CD"],
//[100, "C"],
//[90, "XC"],
//[50, "L"],
//[40, "XL"],
//[10, "X"],
//[9, "IX"],
//[5, "V"],
//[4, "IV"],
//[1, "I"]
//];

//function romanNumeralize(n) {
//if (n === 0) {
//return "";
//}
//for (let i = 0; i < romanIndex.length; i++) {
//if (n >= romanIndex[i][0]) {
//return romanIndex[i][1] + romanNumeralize(n - romanIndex[i][0]);
//}
//}
//}

//console.log(romanNumeralize(1973));

//DEEP EQUALITY
//const johnA = {
  //name: "John",
  //address: {
    //line1: "321 Anytown",
    //line2: "Stoke-on-Trent"
  //}
//};

//const johnB = {
  //name: "John",
  //address: {
    //line1: "321 Anytown",
    //line2: "Stoke-on-Trent"
  //}
//};

//const johnC = {
  //name: "John Charles",
  //address: {
    //line1: "321 Anytown",
    //line2: "Stoke-on-Trent"
  //}
//};

//Object.compare = function(obj1, obj2) {
  //for (let p in obj1) {
    //if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

    //switch (typeof obj1[p]) {
      //case "object":
        //if (!Object.compare(obj1[p], obj2[p])) return false;
        //break;

      //case "function":
        //if (
          //typeof obj2[p] == "undefined" ||
          //(p != "compare" && obj1[p].toString() != obj2[p].toString())
        //)
          //return false;
        //break;

      //default:
        //if (obj1[p] != obj2[p]) return false;
    //}
  //}

  //for (let p in obj2) {
    //if (typeof obj1[p] == "undefined") return false;
  //}

  //return true;
//};

//console.log(Object.compare(johnA, johnB)); // true
//console.log(Object.compare(johnA, johnC)); // false

//******CHRISTMAS TREE PROBLEM***********
// write a function that takes a single number parameter and returns a tree
// structure with *. ex output - >
//  christmasTree(3)
//  *
// * *
//* * *

function christmastTree(x) {
  let tree = "";
  for (let i = 1; i <= x; i++) {
    for (let j= 1; j <= x + x - 1; j++) {
      if (j <= x - i || j >= x + i) {
        tree += " ";
      } else {
        tree += "*"
      }
    }
    tree += "\n";
  }
  return tree;
}

console.log(christmastTree(8))
