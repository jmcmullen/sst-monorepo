import { table } from "./dynamo";

export const auth = new sst.aws.Function("Auth", {
  handler: "packages/auth/src/authorizer.handler",
  url: true,
  link: [table],
});
