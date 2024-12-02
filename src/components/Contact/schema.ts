import { z } from "zod";

export const contactFormSchema = z.object({
  fullname: z.string().nonempty({ message: "Please let me know your name" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().nonempty({ message: "Message is required" }),
});
