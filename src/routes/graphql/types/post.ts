
import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import { UserType } from "./user.js";
import { UUIDType } from "./uuid.js";

export const PostType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		id: {type: new GraphQLNonNull(UUIDType)},
		title: {type: new GraphQLNonNull(GraphQLString)},
		content: {type: new GraphQLNonNull(GraphQLString)},
		author: {
			type: new GraphQLList(UserType),
			resolve: (post, _, context) => {
				return context.prisma.user.findMany({
					where: {id: post.authorId}
				})
			}},
		authorId: {type: new GraphQLNonNull(GraphQLString)}
	}),
})