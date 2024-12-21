export const table = new sst.aws.Dynamo("Dynamo", {
  fields: {
    pk: "string",
    sk: "string",
  },
  ttl: "expiry",
  primaryIndex: {
    hashKey: "pk",
    rangeKey: "sk",
  },
});
