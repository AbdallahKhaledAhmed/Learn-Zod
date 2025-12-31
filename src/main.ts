import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  address: z.object({
    city: z.string(),
    country: z.string(),
  }),
});

const user = {
  name: "Ahmed",
  phoneNumber: "011234567890",
  address: { city: "Beni-Suef", country: "Egypt" },
};

console.log(userSchema.parse(user));
