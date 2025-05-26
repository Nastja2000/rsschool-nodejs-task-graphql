import { UserType } from "./user.js";
import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql"

export const SubscribersOnAuthorsType = new GraphQLObjectType({
	name: 'SubscribersOnAuthors',
	fields: () => ({
		subscriber: {type: new GraphQLNonNull(UserType)},
		author: {type: new GraphQLNonNull(UserType)},
		subscriberId: {type: new GraphQLNonNull(GraphQLString)},
		authorId: {type: new GraphQLNonNull(GraphQLString)}
	}),
});