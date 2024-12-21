import type { InferInput } from "valibot";
import { createSubjects } from "@openauthjs/openauth";
import { object, string } from "valibot";

const UserSchema = object({
  id: string(),
  email: string(),
  firstName: string(),
  lastName: string(),
  tenantId: string(),
});

export type User = InferInput<typeof UserSchema>;

export const subjects = createSubjects({
  user: UserSchema,
});
