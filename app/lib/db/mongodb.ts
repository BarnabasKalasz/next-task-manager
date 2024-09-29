import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI; // MongoDB URI from your .env file
let db: Db | undefined;

// Create a function to connect to the database
export async function connectToDatabase() {
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (db) return db; // Return existing db connection if already connected

  const client = new MongoClient(uri);

  await client.connect();
  db = client.db('task_manager'); // Create or switch to task_manager database
  return db;
}
