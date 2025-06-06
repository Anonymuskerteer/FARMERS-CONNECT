// testMongo.js
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://anonymusk404:CvYsPhbZnWBbQF6P@cluster0.mvgdwdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error("❌ Connection failed:", err);
  } finally {
    await client.close();
  }
}

run();
