const mongoose = require('mongoose');

//mongoDB connnection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
    // useFindAndModify: true,
});

module.exports = mongoose.connection;
