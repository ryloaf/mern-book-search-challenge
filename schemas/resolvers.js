const { User } = require("../models");
// const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.fineOne({ _id: context.user._id })
                    .select("-__v -password")
                    .populate("book");
                return userData;
            }
            throw new AuthenticationError("You must be logged in!");
        },
        users: async () => {
            return User.find().select("-__v - password").populate("book");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select("-__v -password")
                .populate("book");
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials!");
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials!");
            }
            
            const token = signToken(user);
            return { token, user };
        },
        
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        saveBook: async (parent, { bookData }, context) => {
            console.log(context.user);
            console.log(bookData);
            if (context.user) {
                const book = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: bookData } },
                    { new: true }
                );
                return book;
            }
            throw new AuthenticationError("You must be logged in!");
        },

        removeBook: async (parent, args, context) => {
            console.log(args);
            if (context.user) {
                const book = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: {savedBooks: args } },
                    { new: true }
                );
                return book;
            }
            throw new AuthenticationError("You must be logged in!");
        },

        removeBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: args.bookId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("You must be logged in!");
        },
    },
};

module.exports = resolvers;