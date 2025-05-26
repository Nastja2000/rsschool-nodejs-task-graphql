import { UUIDType } from "./uuid.js";
import { ProfileType } from "./profile.js";
import { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLFloat, GraphQLInt } from "graphql"

export const MemberType = new GraphQLObjectType({
	name: 'Member',
	fields: () => ({
		id: {type: new GraphQLNonNull(UUIDType)},
		discount: {type: new GraphQLNonNull(GraphQLFloat)},
		postsLimitPerMonth: {type: new GraphQLNonNull(GraphQLInt)},
		profiles: {
			type: new GraphQLList(ProfileType),
			resolve: (member, _, context) => {
				return context.prisma.profile.findMany({
					where: {memberTypeId: member.id}
				})
			}}
	}),
});