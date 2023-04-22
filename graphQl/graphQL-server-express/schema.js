const graphql = require("graphql");
const userData = require("./userData.json");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

let UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
  }),
});

let RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // get user data query
    getUserList: {
      type: new GraphQLList(UserType),
      args: { gender: { type: GraphQLString } },
      resolve: (parent, args) => {
        // let list = userData.filter((user) => user.gender === args.gender);
        // SELECT * FROM user WHERE gender='args.gender' => MYSQL
        // user.find({ gender: args.gender }) ==> NO-SQL
        return userData;
      },
    },
    // getCountryDetails
  },
});

// let RootMutation = new GraphQLObjectType({
//   name: "RootMutation",
//   fields: {},
// });

// inject gql as middleware  "use"
let schema = new GraphQLSchema({
  query: RootQuery,
});

// export default schema

module.exports = schema;
