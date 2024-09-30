'use client'
import React from 'react';
import Column from './Column';
import { Board } from '../models/Board.interface';
import { useTasks } from '../hooks/useTasks';
import { DndContext } from '@dnd-kit/core';
import { useUpdateTaskStatus } from '../hooks/useUpdateTaskStatus';



interface KanbanBoardProps {
    board: Board
}
const KanbanBoard = ({ board }: KanbanBoardProps) => {
    const { data: tasks, isLoading, error } = useTasks(board._id || '');
    const updateTaskStatus = useUpdateTaskStatus()

    const handleDragEnd = (event: any) => { //TBD dont leave this to be any
        const { active, over } = event;

        if (!over) {
            return;
        }

        const newStatus = over.id;

        if (active.id === newStatus) {
            return;
        }

        updateTaskStatus.mutate({ taskId: active.id, newStatus, boardId: board._id })
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="kanban-board flex flex-col sm:flex-row gap-4 p-4 bg-gray-100 min-h-screen">
                {board.columns?.map((column) => (
                    <Column key={column} tasks={tasks && tasks.filter(task => task.status === column) || []} isLoading={isLoading} column={column} />
                ))}
            </div>
        </DndContext>
    );
};

export default KanbanBoard;