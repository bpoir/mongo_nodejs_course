const {Mongoclient, MongoClient} = require("mongodb")
const uri = require("/atlas_uri")

console.log(`Connection String: ${url}`)

const client = new MongoClient(uri)
const dbname = "myBank"


