const mongoose = require('mongoose');
const uri = process.env.MONGO_URI || require('./secret.js').uri

const connectDB = async () => {
    try{
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000
        }).then(() => {
            console.log('MongoDB Atlas connected')
        }).catch(e => {
            console.log(e)
        })
    }catch (e) {
        console.log('Error with connecting to MongoDB')
        console.log(e)
    }
}

module.exports = connectDB

