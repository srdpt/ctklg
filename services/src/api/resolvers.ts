import { GraphQLScalarType } from "graphql";

import GQLJSON from "graphql-type-json";
import GQLISODate from "graphql-type-json";

import { Context } from "./context";

interface Data {
  id: number;
  created: Date;
  data: unknown;
}

type ResolverFn<T = undefined, R = unknown, P = unknown> = (
  parent: P,
  args: T,
  ctx: Context
) => Promise<R> | R;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface Resolvers {
  [key: string]: GraphQLScalarType | ResolverMap;

  JSON: GraphQLScalarType;
  ISODate: GraphQLScalarType;

  Query: {
    census: ResolverFn<void, Data[]>;
  };
}

export const resolvers: Resolvers = {
  JSON: GQLJSON,
  ISODate: GQLISODate,
  Query: {
    async census(parent, args, ctx) {
      return await ctx.prisma.census_snapshot.findMany();
    },
  },
};
