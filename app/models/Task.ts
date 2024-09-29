export interface Task {
    id: string;
    title: string;
    description: string;
    creator: string;
    assignedTo?: string;
    boardId: string;
    status: string;
}