import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
let db: Db | undefined;

export async function connectToDatabase() {
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (db) return db;

  const client = new MongoClient(uri);

  await client.connect();
  db = client.db('task_manager');
  return db;
}
