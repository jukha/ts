"use strict";
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.password = "default_pass";
    }
    set userPassword(clientSecret) {
        this.password += clientSecret;
    }
    get getUserPass() {
        return this.password;
    }
}
const person1 = new Person("person1", "person1@gmail.com");
