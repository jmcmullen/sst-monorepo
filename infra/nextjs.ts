import { auth } from "./auth";

export const nextjs = new sst.aws.Nextjs("Next", {
  path: "apps/web",
  link: [auth],
});
