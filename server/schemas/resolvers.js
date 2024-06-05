const { User } = require("../models");
// const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id }).select("-__v -password");
              return userData;
            }
            throw AuthenticationError('You must to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError('Incorrect log in!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError('Incorrect log in!');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        saveBook: async (parent, {bookData}, context) => {
          if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { savedBooks: bookData } },
              { new: true }
            );
    
            return updatedUser;
          }
          throw AuthenticationError('Incorrect log in!');
        },
        removeBook: async (parent, {searchedBook}, context) => {
            //return Book.findOneAndDelete({ bookId: searchedBook });
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { searchedBook } } },
                { new: true }
              );
      
              return updatedUser;
            }
            throw AuthenticationError('Incorrect log in!');
        },
    },


};

module.exports = resolvers;