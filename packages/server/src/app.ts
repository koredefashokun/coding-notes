import { ApolloServer } from 'apollo-server';
import './config/database';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server listening at ${url}`);
});
