import * as z from "zod";
import { title, author } from "./../constants/validation.js";

export const bookFullSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters long")
    .max(100, "Title must not exceed 100 characters")
    .regex(title.value, title.message),

  author: z
    .string()
    .min(2, "Author must be at least 2 characters long")
    .max(60, "Author must not exceed 60 characters")
    .regex(author.value, author.message),

  year: z
    .number()
    .int("Year must be an integer")
    .min(1450, "Year must be after 1450")
    .max(2050, `Year must not be after 2050`),
});
