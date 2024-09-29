import { tasks } from "@/app/data/seed"
import { Board } from "@/app/models/Board";
import { Task } from "@/app/models/Task"

export async function getTasksByBoardId(boardId: Task["boardId"]): Promise<Task[]> {
  // this is where i should make the db calls and such. TBD
  return new Promise((res, rej) => {
    return res(tasks.filter(task => task.boardId === boardId)) // temprorary mock data
  });
}


export async function updateTaskById(boardId: Board['id'], taskId: Task['id'], newStatus: Task['status']) {
  return new Promise((res, rej) => {
    let taskToUpdate = tasks.find(task => task.boardId === boardId && task.id === taskId);
    let updatedTask = { ...taskToUpdate, status: newStatus }
    return res(updatedTask); /// not persistent obviously. TBD: do actual db logic
  })
}