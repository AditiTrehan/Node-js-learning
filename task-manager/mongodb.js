const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connecttionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connecttionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name:"Aditi",
        age:'23'
    })
})