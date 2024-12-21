import { bucket } from "./storage";

export const api = new sst.aws.Function("Api", {
  url: true,
  link: [bucket],
  handler: "apps/api/src/index.handler",
});
