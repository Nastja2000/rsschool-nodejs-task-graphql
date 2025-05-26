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
		profile: {type: ProfileType},
		posts: {type: new GraphQLList(PostType)},
		userSubscribedTo: {type: new GraphQLList(SubscribersOnAuthorsType)},
		subscribedToUser: {type: new GraphQLList(SubscribersOnAuthorsType)}
	}),
});