const {Mongoclient, MongoClient} = require("mongodb")
const uri = require("./atlas_uri")

console.log(`Connection String: ${uri}`)

const client = new MongoClient(uri)
const dbname = "bank"

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
    } catch (err){
        console.error(`Error connecting to database: ${err}`);
    }
};


const main = async () => {
    try {
        await connectToDatabase();
        const databasesList = await client.db().admin().listDatabases();
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    }catch (err){
        console.error(`Error connecting to the database: ${err}`);
    }finally {
        await client.close();
    }
};

main()