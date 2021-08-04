const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");
const { fakeDB } = require("./database");

var typeDefs = gql`
  type Query {
    human(req: inputHero): Human
    starship(req: inputShip): Starship
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

  input inputShip {
    source: String!
    target: String!
  }

  input inputHero {
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
    async starship(obj, args, context, info) {
      let data = await fakeDB(args.req);
      return data;
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
