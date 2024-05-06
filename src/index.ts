let age: number = 10;
if (age < 50) age += 10;

// Built in Types

// *** Tuple ***
/* A fixed length array where each element has a particular type */
let myUser: [number, string] = [1, "abc"];

// *** Enums ***
/* Represent a list of related constants */
// Shirt sizes can be represented as
const small = 1;
const medium = 2;
const large = 3;

// OR

enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);
