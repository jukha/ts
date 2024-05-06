class Person {
  readonly email: string;
  name: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const person1: Person = new Person("person1", "person1@gmail.com");
