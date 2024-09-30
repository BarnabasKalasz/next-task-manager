import { connectToDatabase } from './mongodb';

export async function resetDatabase() {
  const db = await connectToDatabase();

  try {
    await db.collection('boards').deleteMany({});
    console.log('All documents in Boards collection deleted.');

    await db.collection('tasks').deleteMany({});
    console.log('All documents in Tasks collection deleted.');
  } catch (error) {
    console.error('Error resetting database:', error);
  }
}

resetDatabase();