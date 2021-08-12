const { parse, validate, execute, GraphQLSchema } = require("graphql");

const typeDef = require("./schema");

let schema = new GraphQLSchema({
  query: typeDef,
});

let query = `
  {
    user{
      name
    }
  }
`;

let parsedQuery = parse(query);

var errors = validate(schema, parsedQuery);
if (!errors.length) console.log("Schema validated!");
else {
  console.log(`Erros: ${JSON.stringify(erros)}`);
  process.exit(1);
}

execute(schema, parsedQuery)
  .then(function (result) {
    console.log(`Execution results:\n ${JSON.stringify(result)}`);
  })
  .catch(function (error) {
    console.error(JSON.stringify(error));
  });
