import { schema, string } from "dynamodb-toolbox";

export const UserSchema = schema({
  email: string().key().savedAs("pk"),
  type: string().key().default("user").savedAs("sk"),
  firstName: string().required(),
  lastName: string().required(),
});
