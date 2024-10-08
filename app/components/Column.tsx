'use client'
import React from 'react'
import { useDroppable } from '@dnd-kit/core';
import TaskItem from "./TaskItem";
import { Task } from '../models/Task.interface';

interface ColumnProps {
    column: string;
    tasks: Task[];
    isLoading: boolean;
}

const Column = ({ column, tasks, isLoading }: ColumnProps) => {

    const { setNodeRef, isOver } = useDroppable({
        id: column,
    });


    return (
        <div ref={setNodeRef} className="kanban-column flex-1 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{column}</h3>
            {isLoading ? (
                <p>Loading tasks...</p>
            ) : (
                tasks?.map((task) => {
                    let status: Task['status'] = isOver ? column : task.status
                    return <TaskItem key={task._id as string} task={{ ...{ status }, ...task }} />
                })
            )}
        </div>
    );
}

export default Column