import Link from "next/link";
import { Board } from "./models/Board";
import { getBoards } from "./lib/db/boards";

export default async function Home() {
  let boards: Board[];
  try {
    boards = await getBoards();

  } catch (error) {
    console.error("Failed to load boards:", error);
    boards = [];
  }

  return boards.map(board => <Link href={`kanban/${board.id}`}><h1>{board.name}</h1></Link>
  )

}
