import { useQuery } from "react-query"
import { fetchTasks } from "../lib/api"
import { Task } from "../models/Task"

export const useTasks = (boardId: Task['boardId']) => {
    console.log('we are in the useTasks hook')
    return useQuery<Task[]>(['tasks', boardId], () => fetchTasks(boardId))
}