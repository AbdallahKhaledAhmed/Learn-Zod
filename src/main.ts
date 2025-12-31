import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number().optional(),
  country: z.string().default("Unknown"),
});

const user = { name: "Abdo", age: 22, country: "Estonia" };
console.log(userSchema.parse(user));
