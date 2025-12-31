import { string, z } from "zod";

const toLearnSchema = z.array(string());

const toLearn = ["Jest", "NestJS", "Postgresql", "Docker"];
const toLearn2 = [1, "NestJS", "Postgresql", "Docker", 2]; // error

console.log(toLearnSchema.parse(toLearn));
console.log(toLearnSchema.parse(toLearn2));
