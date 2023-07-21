import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import SchemaBuilder from "@pothos/core";

interface Giraffe {
  name: string;
  birthday: string;
  height: number;
}

const builder = new SchemaBuilder<{ Objects: { Giraffe: Giraffe } }>({});

builder.objectType("Giraffe", {
  description: "Long necks, cool patterns, taller than you.",
  fields: (t) => ({
    name: t.exposeString("name"),
    birthdat: t.exposeString("birthday"),
    height: t.exposeFloat("height"),
  }),
});

builder.queryFields((t) => ({
  giraffe: t.field({
    type: "Giraffe",
    resolve: () => {
      return {
        name: "asd",
        birthday: "asd",
        height: 123,
      };
    },
  }),
}));

const yoga = createYoga({
  schema: builder.toSchema(),
});

const server = createServer(yoga);

server.listen(3000, () => {
  console.log("Visit http://localhost:3000/graphql");
});
