import { useQuery } from "react-query"
import { fetchTasks } from "../lib/api"
import { Task } from "../models/Task"

export const useTasks = (boardId: Task['boardId']) => {
    return useQuery<Task[]>(['tasks', boardId], () => fetchTasks(boardId))
}