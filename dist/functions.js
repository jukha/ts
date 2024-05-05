"use strict";
function sum(no1, no2) {
    return no1 + no2;
}
function greetings(name, timePeriod) {
    let greetings = `Welcome ${name}`;
    if (timePeriod) {
        greetings = `Good ${timePeriod}! ${greetings}`;
    }
    return greetings;
}
sum(10, 20);
console.log(greetings("Jack", "morning"));
console.log(greetings("Jack"));
