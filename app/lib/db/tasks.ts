import { tasks } from "@/app/data/seed"
import { Board } from "@/app/models/Board.interface";
import { Task } from "@/app/models/Task.interface"
import { connectToDatabase } from "./mongodb";
import { ObjectId } from "mongodb";

export async function getTasksByBoardId(boardId: Task["boardId"]): Promise<Task[]> {
  /*   return new Promise((res, rej) => {
      return res(tasks.filter(task => task.boardId === boardId)) // temprorary mock data
    }); */
  const db = await connectToDatabase();
  const tasksCollection = db.collection<Task>('tasks');
  const tasks = await tasksCollection.find({ boardId }).toArray();

  return tasks.map(task => ({ ...task, _id: task._id.toString() })) || [];
}


export async function updateTaskById(boardId: Board['_id'], taskId: Task['_id'], newStatus: Task['status']) {
  const db = await connectToDatabase();
  const tasksCollection = db.collection<Task>('tasks');
  const objectId = new ObjectId(taskId)
  console.log({ taskId })
  const updatedTask = await tasksCollection.findOneAndUpdate({ _id: objectId }, { $set: { status: newStatus } }, { returnDocument: 'after' })

  /*   return new Promise((res, rej) => {
      let taskToUpdate = tasks.find(task => task.boardId === boardId && task.id === taskId);
      let updatedTask = { ...taskToUpdate, status: newStatus }
      return res(updatedTask); /// not persistent obviously. This just serves the purpose of a mock response
    }) */

  return updatedTask ? { ...updatedTask, _id: updatedTask?._id.toString() } : null
}

export async function createTask(task: Omit<Task, '_id' & 'boardId'>, boardId: Task['boardId']) {
  const db = await connectToDatabase();
  console.log({ inDBFn: task }, boardId)
  const tasksCollection = db.collection<Task>('tasks');
  const newTask = await tasksCollection.insertOne({ ...task, boardId })
  return newTask ? { ...newTask, _id: newTask.insertedId.toString() } : null;
}