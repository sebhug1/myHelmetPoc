import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
      Impact: a
      .model({
        id: a.id(),
        force: a.integer(),
        isDone: a.boolean(),
        helmetId: a.integer().required(),
        helmet: a.belongsTo("Helmet", "helmetId"), // Specify the foreign key
      })
      .authorization((allow) => [allow.ownerDefinedIn("profileOwner"),allow.publicApiKey()]),
    Helmet: a
      .model({
        id: a.integer().required(),
        alias: a.string().required(),
        isDone: a.boolean(),
        impacts: a.hasMany("Impact", "helmetId"), // Specify the foreign key in Impact
      })
      .authorization((allow) => [allow.ownerDefinedIn("profileOwner"),allow.publicApiKey()]),
    Todo: a
      .model({
        content: a.string(),
        isDone: a.boolean(),
      })
      .authorization((allow) => [allow.publicApiKey()]),
  })
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
