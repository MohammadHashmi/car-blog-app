import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "/home/dubi/Downloads/car-blog-app/server/.env" });

const uri = process.env.ATLAS_URI || "error";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Sucessfully connected to MongoDB!");
} catch (err) {
  console.log(err);
}

let db = client.db("employees");

export default db;
