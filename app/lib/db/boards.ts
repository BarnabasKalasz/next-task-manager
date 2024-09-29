import { boards } from "@/app/data/seed";
import { Board } from "@/app/models/Board";
import { connectToDatabase } from "./mongodb";

export async function getBoards(): Promise<Board[]> {

  const db = await connectToDatabase();
  const boardsCollection = db.collection<Board>('boards');

  const roads = await boardsCollection.find({}).toArray();

  console.log('gpt from mongodb', roads)
  return new Promise((res, rej) => {
    return res(boards) // temprorary mock data
  })
}

export async function getBoardById(boardId: Board['id']): Promise<Board | null> {
  return new Promise((res, rej) => {
    return res(boards.find(({ id }) => id === boardId) || null) // temprorary mock data
  })
}