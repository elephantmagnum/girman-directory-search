import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const options = {};

// Variable to store the MongoClient connection promise
let clientPromise: Promise<MongoClient> | null = null;

// Function to initialize MongoClient and ensure it's reused
const getMongoClient = (): Promise<MongoClient> => {
  if (!clientPromise) {
    const client = new MongoClient(uri, options);
    clientPromise = client.connect(); // Only connect once
  }
  return clientPromise; // Reuse the same connection
};

export default getMongoClient;
