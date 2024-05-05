function sum(no1: number, no2: number): number {
  return no1 + no2;
}

function greetings(name: string, timePeriod?: string): string {
  let greetings = `Welcome ${name}`;
  if (timePeriod) {
    greetings = `Good ${timePeriod}! ${greetings}`;
  }
  return greetings;
}

sum(10, 20);

console.log(greetings("Jack", "morning"));
console.log(greetings("Jack"));
