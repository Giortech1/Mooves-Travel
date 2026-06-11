import { z } from "zod";
import { fromError } from "zod-validation-error";

/**
 * Validates data against a Zod schema and returns user-friendly errors.
 */
export function validateOrThrow<T>(schema: z.ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw fromError(result.error);
  }
  return result.data;
}