import { UUIDType } from "./uuid.js"
import { PostType } from "./post.js";
import { ProfileType } from "./profile.js";
import { SubscribersOnAuthorsType } from "./subscribersOnAuthors.js";
import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLFloat } from "graphql"

export const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {type: new GraphQLNonNull(UUIDType)},
		name: {type: new GraphQLNonNull(GraphQLString)},
		balance: {type: new GraphQLNonNull(GraphQLFloat)},
		profile: {
			type: ProfileType,
			resolve: (user, _, context) => {
				return context.prisma.profile.findUnique({
					where: {userId: user.id}
				})
			}
		},
		posts: {
			type: new GraphQLList(PostType),
			resolve: (user, _, context) => {
				return context.prisma.post.findMany({
					where: {authorId: user.id}
				})
			}},
		userSubscribedTo: {
			type: new GraphQLList(SubscribersOnAuthorsType),
			resolve: (user, _, context) => {
				return context.prisma.subscribersOnAuthors.findMany({
					where: {subscriberId: user.id}
				})
			}},
		subscribedToUser: {
			type: new GraphQLList(SubscribersOnAuthorsType),
			resolve: (user, _, context) => {
				return context.prisma.subscribersOnAuthors.findMany({
					where: {authorId: user.id}
				})
			}}
	}),
});