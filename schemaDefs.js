const { GraphQLID, GraphQLObjectType, GraphQLString } = require("graphql");

var db = [
  { id: "1", name: "Primeiro Usuario" },
  { id: "2", name: "Segundo Usuario" },
  { id: "3", name: "Terceiro Usuario" },
];

var UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLID,
      resolve: function (root, args, context, info) {
        console.log("My custom resolver for ID");
        return root.id;
      },
    },
    name: {
      type: GraphQLString,
      resolve: function (root, args, context, info) {
        console.log("My custom resolver for NAME");
        return root.name;
      },
    },
  },
});

let typeDef = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID,
          defaultValue: "1",
          description: "Returns a user by ID value",
        },
      },
      resolve: async function (root, args, context, info) {
        let { id } = args;
        return db.find(function (value) {
          return value.id == id;
        });
      },
    },
  },
});

module.exports = typeDef;
