require("dotenv").config();
import { MongoClient } from "mongodb";

// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      process.env.REACT_APP_CONNECTION_STRING
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    // can add error handling

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
