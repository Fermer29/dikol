const { ApolloServer, gql } = require("apollo-server");
const uuidv1 = require("uuid/v1");
const recentPlaces = [
  {
    id: uuidv1(),
    title: "Мой Авто",
    subTitle: "Автосервиc",
  },
  {
    id: uuidv1(),
    title: "Рашель",
    subTitle: "Салон красоты",
  },
  {
    id: uuidv1(),
    title: "LemonLounge",
    subTitle: "Кальянная",
  },
  {
    id: uuidv1(),
    title: "Chop Chop",
    subTitle: "Парикмахерская",
  },
];
const popularCategories = [
  {
    id: uuidv1(),
    type: "nail-service",
    title: "Ногтевой сервис",
  },
  {
    id: uuidv1(),
    type: "service",
    title: "Автосервис",
  },
  {
    id: uuidv1(),
    type: "hookah",
    title: "Кальянные",
  },
  {
    id: uuidv1(),
    type: "scissors",
    title: "Парикмахерские",
  },
];
const typeDefs = gql`
  type recentPlace {
    id: String!
    title: String!
    subTitle: String!
  }
  type popularCategories {
    id: String!
    type: String!
    title: String!
  }

  type Query {
    recentPlaces: [recentPlace]
    popularCategories: [popularCategories]
  }
`;

const resolvers = {
  Query: {
    recentPlaces: () => recentPlaces,
    popularCategories: () => popularCategories,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`Server ready at: ${url}`);
});
