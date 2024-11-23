const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const _ = require("lodash");

var language_data = [
  { id: "1", name: "JavaScript", langtype: "front-end" },
  { id: "2", name: "Java", langtype: "back-end" },
  { id: "3", name: "Angular", langtype: "front-end" },
  { id: "4", name: "React", langtype: "front-end" },
  { id: "5", name: "Node", langtype: "back-end" },
];

const language = new GraphQLObjectType({
  name: "language",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    langtype: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    language: {
      type: language,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        console.log("Resolving language with ID:", args.id);
        return _.find(language_data, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
