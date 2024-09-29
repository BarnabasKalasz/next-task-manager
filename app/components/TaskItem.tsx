import React from 'react'
import { Task } from '../models/Task'
import { useDraggable } from '@dnd-kit/core';


interface TaskItemProps {
    task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="task-item">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p><strong>Creator:</strong> {task.creator}</p>
            <p><strong>Assigned To:</strong> {task.assignedTo || ''}</p>
        </div>
    );
}

export default TaskItem