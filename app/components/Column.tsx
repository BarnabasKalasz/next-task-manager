import React from 'react'
import { useTasks } from "../hooks/useTasks";
import { Board } from "../models/Board";
import { useDroppable } from '@dnd-kit/core';
import TaskItem from "./TaskItem";
import { Task } from '../models/Task';

interface ColumnProps {
    column: string;
    tasks: Task[];
    isLoading: boolean;
}

const Column = ({ column, tasks, isLoading }: ColumnProps) => {

    const { setNodeRef } = useDroppable({
        id: column,
    });

    return (
        <div ref={setNodeRef} className="kanban-column">
            <h3>{column}</h3>
            {isLoading ? (
                <p>Loading tasks...</p>
            ) : (
                tasks?.map((task) => <TaskItem key={task.id} task={task} />)
            )}
        </div>
    );
}

export default Column