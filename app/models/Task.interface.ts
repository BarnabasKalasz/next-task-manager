import { ObjectId } from "mongodb";

export interface Task {
    _id: string | ObjectId;
    title: string;
    description: string;
    creator: string;
    assignedTo?: string;
    boardId: string;
    status: string;
}