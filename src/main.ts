import { z } from "zod";

// define schema
const userSchema = z.object({
  name: z.string(),
  age: z.number().optional(),
  email: z.email(),
});

// infer typescript types for the schema
type User = z.infer<typeof userSchema>; // infer type as it is

// use the type
const newUser: User = {
  name: "abdooo",
  email: "123@123.com",
};

console.log(userSchema.parse(newUser));
