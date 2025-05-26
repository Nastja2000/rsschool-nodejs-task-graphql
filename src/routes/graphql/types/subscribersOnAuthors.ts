import { UserType } from "./user.js";
import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql"

export const SubscribersOnAuthorsType = new GraphQLObjectType({
	name: 'SubscribersOnAuthors',
	fields: () => ({
		subscriber: {type: new GraphQLNonNull(UserType),
			resolve: (subscribersOnAuthors, _, context) => {
				return context.prisma.user.findUnique({
					where: {id: subscribersOnAuthors.subscriberId}
				})
			}},
		author: {
			type: new GraphQLNonNull(UserType),
			resolve: (subscribersOnAuthors, _, context) => {
				return context.prisma.user.findUnique({
					where: {id: subscribersOnAuthors.authorId}
				})
			}},
		subscriberId: {type: new GraphQLNonNull(GraphQLString)},
		authorId: {type: new GraphQLNonNull(GraphQLString)}
	}),
});