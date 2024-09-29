import { tasks } from "@/app/data/seed"
import { Task } from "@/app/models/Task"

export async function getTasksByBoardId(boardId: Task["boardId"]): Promise<Task[]> {
  // this is where i should make the db calls and such. TBD
  return new Promise((res, rej) => {
    return res(tasks.filter(task => task.boardId === boardId)) // temprorary mock data
  });
}