import TaskItem from "../components/TaskItem";
import { Board } from "../models/Board";
import { Task } from "../models/Task";

export const fetchBoards = async (): Promise<Board[]> => {
    let res = await fetch("http://localhost:3000/api/boards");
    if (!res.ok) {
        throw new Error("Failed to fetch boards");
    }
    let boards = await res.json();
    return boards;
}

export const fetchBoardById = async (boardId: Board['id']): Promise<Board> => {
    let res = await fetch(`http://localhost:3000/api/boards/${boardId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let board: Board = await res.json();
    return board
}

export const fetchTasks = async (boardId: Task["boardId"]) => {
    console.log('fetchtasks is called')
    let res = await fetch(`http://localhost:3000/api/boards/${boardId}/tasks`);
    let tasks: Task[] = await res.json()
    return tasks;
}

export const updateTask = async (taskId: Task['id'], newStatus: Task['status'], boardId: Board['id']) => {
    let res = await fetch(`http://localhost:3000/api/boards/${boardId}/tasks/${taskId}`, {
        method: 'PUT', headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
    });
    let updatedTask: Task = await res.json();
    return updatedTask;

}