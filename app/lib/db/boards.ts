import { boards } from "@/app/data/seed";
import { Board } from "@/app/models/Board";

export async function getBoards(): Promise<Board[]> {
  // this is where i should make the db calls and such. TBD
  return new Promise((res, rej) => {
    return res(boards) // temprorary mock data
  })
}

export async function getBoardById(boardId: Board['id']): Promise<Board | null> {
  // this is where i should make the db calls and such. TBD
  return new Promise((res, rej) => {
    return res(boards.find(({ id }) => id === boardId) || null) // temprorary mock data
  })
}