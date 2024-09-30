'use client'
import React from 'react'
import { Task } from '../models/Task.interface'
import { useDraggable } from '@dnd-kit/core';


interface TaskItemProps {
    task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task._id as string,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="task-item bg-white p-4 border border-gray-200 rounded-lg shadow-sm mb-4 cursor-pointer hover:bg-gray-50 transition-transform duration-200 ease-in-out">
            <h4 className="text-md font-semibold text-gray-800">{task.title}</h4>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500"><strong>Creator:</strong> {task.creator}</p>
            <p className="text-sm text-gray-500"><strong>Assigned To:</strong> {task.assignedTo || ''}</p>
        </div>
    );
}

export default TaskItem