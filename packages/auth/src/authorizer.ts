/* eslint-disable @typescript-eslint/require-await */
import { authorizer } from "@openauthjs/openauth";
import { PasswordAdapter } from "@openauthjs/openauth/adapter/password";
import { DynamoStorage } from "@openauthjs/openauth/storage/dynamo";
import { PasswordUI } from "@openauthjs/openauth/ui/password";
import { handle } from "hono/aws-lambda";
import { Resource } from "sst";

import { subjects } from "./subjects";

async function getUser(email: string) {
  // Get user from database
  // Return user ID
  return {
    id: "123",
    firstName: "Test",
    lastName: "User",
    email,
    tenantId: "456",
  };
}

const app = authorizer({
  storage: DynamoStorage({
    table: Resource.Dynamo.name,
  }),
  subjects,
  providers: {
    password: PasswordAdapter(
      PasswordUI({
        sendCode: async (email, code) => {
          console.log(email, code);
        },
      }),
    ),
  },
  success: async (ctx, value) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (value.provider === "password") {
      const user = await getUser(value.email);
      return ctx.subject("user", user);
    }
    throw new Error("Invalid provider");
  },
});

export const handler = handle(app);
