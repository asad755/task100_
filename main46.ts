//excersize 1 Q45 assinment 
var personName = "ERIC";
console.log("hellow ".concat(personName, " would you like to learn some Python today?"));

//excersize 2 Q45 assinment 
let myName: string = "Asadiftekhar"; // This saves the name

console.log(`Hello ${myName}, would you like to learn some TypeScript today?`); // This shows the message

//excersize 3 Q45 assinment 
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');
//excersize 4 Q45 assinment 

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;

console.log(message);
//excersize 5 Q45 assinment 
let myName: string = "\t\n Asadiftekhar \t\n"; // This saves the name with whitespace

console.log(myName); // Shows the name with whitespace
console.log(myName.trim()); // Shows the name without whitespace


//excersize 6 Q45 assinment 

console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division

//excersize 7 Q45 assinment 
//excersize 8 Q45 assinment 
//excersize 9 Q45 assinment 

let favoriteNumber: number = 8; // This saves your favorite number
console.log(`My favorite number is ${favoriteNumber}.`); // This shows the message with your favorite number


//excersize 10 Q45 assinment 
// Asadiftekhar, 2024-03-05
// This program prints a personal message.
let myName: string = "Asadiftekhar";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

//excersize 11 Q45 assinment 

var names = ["Alice", "Bob", "Charlie"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//excersize 12 Q45 assinment 

let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}

//excersize 13 Q45 assinment 

let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

//excersize 14 Q45 assinment 

let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

//excersize 15 Q45 assinment 

// Q14 Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// Q15 Answer:
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});



//excersize 16 Q45 assinment 

// Q16 Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Q17 Answer:
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list

//excersize 17 Q45 assinment 


let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

//excersize 18 Q45 assinment 

let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log(`I am inviting ${guests.length} people to dinner.`);


//excersize 19 Q45 assinment 

let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);
//excersize 20 Q45 assinment 

let book: { title: string; author: string; yearPublished: number } = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

let friends: string[] = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.

//excersize 21 Q45 assinment 

let car = "subaru";

console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");

console.log("Is car == 'toyota'? I predict false");
console.log(car == "toyota");

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//excersize 22 Q45 assinment 

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

//excersize 23 Q45 assinment 

// Version that passes:
let alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
  // No output because the condition is false
}

//excersize 24 Q45 assinment 

// Version that passes:
let alien_color = "green";

// Q26 Answer:
// Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien");
} else {
  console.log("You just earned 10 points");
}

// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

//excersize 25 Q45 assinment 

let alien_color = "pink";

// Green alien version:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

export {} // To prevent errors from redeclaration

//excersize 26 Q45 assinment 

let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
// Continue with more fruits


//excersize 27 Q45 assinment 

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

//excersize 28 Q45 assinment 

let usernames: string[] = [];

if(usernames.length === 0){
    console.log("We need to find some users!");
    
} else {
    // Greet Users 
}

// Removing all usernames ensures the message "We need to find some users!" is printed.


//excersize 29 Q45 assinment 

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});

//excersize 30 Q45 assinment 

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let suffix = "th";
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  }
  console.log(`${number}${suffix}`);
});

//excersize 31 Q45 assinment


let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

