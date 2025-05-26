import { UUIDType } from "./uuid.js";
import { UserType } from "./user.js";
import { MemberType } from "./member.js";
import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLBoolean, GraphQLInt } from "graphql"

export const ProfileType = new GraphQLObjectType({
	name: 'Profile',
	fields: () => ({
		id: {type: new GraphQLNonNull(UUIDType)},
		isMale: {type: new GraphQLNonNull(GraphQLBoolean)},
		yearOfBirth: {type: new GraphQLNonNull(GraphQLInt)},
		user: {type: new GraphQLNonNull(UserType)},
		userId: {type: new GraphQLNonNull(GraphQLString)},
		memberType: {type: new GraphQLList(MemberType)},
		memberTypeId: {type: new GraphQLNonNull(GraphQLString)}
	}),
});