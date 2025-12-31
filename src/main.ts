import { z } from "zod";

const userLevelSchema = z.enum(["admin", "user", "moderator", "guest"]);

const user1Role = "admin";
const user2Role = "none";

console.log(userLevelSchema.parse(user1Role));
console.log(userLevelSchema.parse(user2Role));
