import type { NextApiRequest, NextApiResponse } from 'next';
import getMongoClient from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;
  
  if (!query) {
    return res.status(400).json({ message: 'Query parameter is missing' });
  }

  // Convert the query to lowercase for case-insensitive comparison
  const searchQuery = (query as string).toLowerCase();

  // console.log("Query param at API:", searchQuery);

  try {
    // Get the MongoClient using the singleton function
    const client = await getMongoClient();
    const db = client.db("girman");
    const contacts = db.collection("contacts");

    // Perform your query
    const result = await contacts.find({
      $or: [
        { first_name: { $regex: searchQuery, $options: 'i' } },
        { last_name: { $regex: searchQuery, $options: 'i' } }
      ]
    }).toArray();

    res.status(200).json(result);

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch data from MongoDB' });
  }
}
