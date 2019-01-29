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
function vowelCount(str) {
  let letter = str.match(/[aeiou]/gi);
  return letter === null ? 0 : letter.length;
}

//const vowelCount = str =>
//Array.from(str).filter(letter => "aeiou".includes(letter)).length;

console.log(vowelCount("-bcd-fgh-pqrst-vwxyz"));
console.log(vowelCount("Hello world!")); // <--- 3
console.log(vowelCount("Pinto beans")); // <--- 4
console.log(vowelCount("The quick brown fox jumped over the lazy dog.")); // <--- 12
console.log(
  vowelCount(
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal."
  )
); // <--- 58
console.log(vowelCount("All I have ever wanted is to be an Uber driver!")); // <--- 16
