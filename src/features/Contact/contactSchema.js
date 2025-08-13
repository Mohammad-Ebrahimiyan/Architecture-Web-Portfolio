import { z } from "zod";
import  isIranMobile  from "./phoneValidation";

export const contactSchema = z.object({
  name: z.string().trim().min(3).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().refine(isIranMobile, "Invalid Iranian mobile number"),
  company: z.string().trim().min(2).max(120),
  subject: z.string().trim().min(3).max(120),
  message: z.string().min(10).max(2000),
});
