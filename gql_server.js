const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");
const { fakeDB } = require("./database");

var typeDefs = gql`
  type Query {
    human(req: inputRequest): Human
    starship: Starship
  }

  enum Episode {
    NEWHOPE
    EMPIRE
    JEDI
  }

  enum LengthUnit {
    METER
    FOOT
  }

  input inputRequest {
    source: String!
    target: String!
  }

  type Human {
    name: String
    appearsIn: [Episode]!
    starships: [Starship]
  }

  type Starship {
    name: String
    length: Float
  }
`;

var resolvers = {
  Query: {
    async human(obj, args, context, info) {
      let data = await fakeDB(args.req);
      return data;
    },
    starship() {
      return {
        name: "X-Wing",
        length: 50.0,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3500).then(function () {
  console.log("Running on port 3500");
});
