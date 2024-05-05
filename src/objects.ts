// ======================
// Type Alias
// ======================
type Employee = {
  readonly id: number;
  name: string;
  faxNo?: string;
  retire: (data: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "abc",
  retire: (date: Date) => {
    console.log(date);
  },
};

// ================================
// Union Types ---> string | number
// ================================
function KgToLbs(weight: string | number): number {
  // Narrowing Type
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// ==============================================
// Intersection Types --> Draggable & Resizeable
// ==============================================
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ===========================
// Literal Types ---> 50 | 100
// ===========================
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// =============================
// Optional Chaining --> ?.
// =============================

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday);
