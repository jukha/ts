class Person {
  readonly email: string;
  private password: string;
  name: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.password = "default_pass";
  }

  set userPassword(clientSecret: string) {
    this.password += clientSecret;
  }

  get getUserPass() {
    return this.password;
  }
}

const person1: Person = new Person("person1", "person1@gmail.com");
