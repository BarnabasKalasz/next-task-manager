// import { boards } from "@/app/data/seed"; // this is mock data
import { Board } from "@/app/models/Board.interface";
import { connectToDatabase } from "./mongodb";
import { ObjectId } from "mongodb";

export async function getBoards(): Promise<Board[]> {

  const db = await connectToDatabase();
  const boardsCollection = db.collection<Board>('boards');
  const boards = await boardsCollection.find({}).toArray();

  return boards.map(board => ({ ...board, _id: board._id.toString() }));


  /*   return new Promise((res, rej) => {
      return res(boards) // temprorary mock data
    }) */
}

export async function getBoardById(boardId: Board['_id']): Promise<Board | null> {
  const db = await connectToDatabase();
  const boardsCollection = db.collection<Board>('boards');
  console.log('board id right above the object id creation', boardId)
  const objectId = new ObjectId(boardId);

  const board = await boardsCollection.findOne(objectId);
  /*   return new Promise((res, rej) => {
      return res(boards.find(({ id }) => id === boardId) || null) // temprorary mock data in case i dont wanna use the mongodb
    }) */
  return board ? { ...board, _id: board._id.toString() } : null;
}


export async function createBoard(board: Omit<Board, '_id'>) {
  const db = await connectToDatabase();
  const boardsCollection = db.collection<Omit<Board, '_id'>>('boards');

  const newBoard = await boardsCollection.insertOne(board)

  return newBoard ? { ...newBoard, _id: newBoard.insertedId.toString() } : null;
}