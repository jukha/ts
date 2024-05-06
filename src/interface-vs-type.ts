// Lets say this interface belongs to a library
interface Client {
  email: string;
  id: number;
  googleId?: number;
}

// Reopening of Interface means adding more properties as per our needs
interface Client {
  githubId: number;
}

const user: Client = {
  email: "abc@gmail.com",
  id: 1001,
  githubId: 2002,
};

// Interface also supports inheritance
interface Admin extends Client {
  role: string;
}

const myAdmin: Admin = {
  email: "admin@gmial.com",
  githubId: 1094,
  id: 490,
  role: "admin",
};
