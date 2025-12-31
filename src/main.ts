import { z } from "zod";

// Creating Zod Schema
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.email(),
});

// The data
const user1 = {
  name: "Abdallah",
  age: 21,
  email: "abdallah@example.com",
};
const user2 = {
  name: 1,
};

// Validate the data using the schema

const validUser1 = userSchema.parse(user1);
console.log(validUser1);

const validUser2 = userSchema.parse(user2);
console.log(validUser2);
