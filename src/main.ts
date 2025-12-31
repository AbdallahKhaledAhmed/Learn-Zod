import { z } from "zod";

// define schema
const userSchema = z.object({
  name: z.string(),
  age: z.number().optional(),
  email: z.email(),
});

type User = z.infer<typeof userSchema>; // infer type as it is

const newUser1: User = {
  name: "abdooo",
  email: "123@123.com",
};
const newUser2 = {
  name: 1,
  email: "123@123.com",
};

// Handling Errors

try {
  userSchema.parse(newUser1);
  userSchema.parse(newUser2);
  console.log("✅ Success");
} catch (error) {
  console.error("❌ Error: ", error);
}
