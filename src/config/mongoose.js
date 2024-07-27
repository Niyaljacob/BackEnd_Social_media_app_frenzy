const mongoose = require('mongoose')
const nodemon = require('nodemon');
// @desc    Mongoose configuration
// @file   < Config >
// @access  Private


const connect = async() => {
    try {
        await mongoose.connect("mongodb://niyaljacob76:GwaaD39Fkh7jl1ip@ac-hwsj0fs-shard-00-00.w4opk5c.mongodb.net:27017,ac-hwsj0fs-shard-00-01.w4opk5c.mongodb.net:27017,ac-hwsj0fs-shard-00-02.w4opk5c.mongodb.net:27017/?ssl=true&replicaSet=atlas-4agml1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
        console.log('mongoDB is connected'); 
    } catch (error) {
        console.log(error);
        nodemon.restart();
    }
}

module.exports = connect;

