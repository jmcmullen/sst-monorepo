/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "monorepo-template",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // const api = await import("./infra/api");
    const auth = await import("./infra/auth");
    const dynamo = await import("./infra/dynamo");
    const next = await import("./infra/nextjs");
    // await import("./infra/auth");

    return {
      // api: api..url,
    };
  },
});
