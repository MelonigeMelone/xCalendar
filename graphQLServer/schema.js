const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
}=require('graphql');

const UserType=new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString}
    })
})

const RootQuery=new GraphQLObjextType({
    name:'RootQueryType',
    user:{
        type:UserType
    }
});

module.exports=new GraphQLSchema({

})