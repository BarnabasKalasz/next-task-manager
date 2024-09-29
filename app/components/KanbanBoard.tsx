import React from 'react';
import Column from './Column';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { Board } from '../models/Board';
import { useTasks } from '../hooks/useTasks';
import { getTasksByBoardId } from '../lib/db/tasks';


interface KanbanBoardProps {
    board: Board
}
const KanbanBoard = async ({ board }: KanbanBoardProps) => {
    const { columns, handleDragEnd } = useDragAndDrop(board.columns);
    // const { data: tasks, isLoading } = useTasks(board.id);

    let tasks = await getTasksByBoardId(board.id)

    console.log(tasks)
    // if (isLoading) return <p>Loading...</p>;

    return (
        <div className="kanban-board flex flex-col sm:flex-row gap-4 p-4 bg-gray-100 min-h-screen">
            {columns?.map((column) => (
                <Column key={column} tasks={tasks.filter(task => task.status === column) || []} isLoading={false} column={column} />
            ))}
        </div>
    );
};

export default KanbanBoard;