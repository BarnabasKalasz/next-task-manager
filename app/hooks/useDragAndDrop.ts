import { useState } from 'react';
import { Task } from '../models/Task';
import { Board } from '../models/Board';

export const useDragAndDrop = (initialColumns: Board["columns"]) => {
  const [columns, setColumns] = useState(initialColumns);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return; // No movement or dropped outside any droppable zone
    }

    // Perform the task move logic
    const updatedColumns = moveTask(active.id, over.id, columns);
    setColumns(updatedColumns);
  };

  // Helper function to move tasks between columns
  const moveTask = (taskId: string, destinationColumnId: string, columns: any) => {
    let taskToMove: Task;

    const updatedColumns = columns.map((column: any) => {
      // Find and remove the task from the column it's currently in
      if (column.tasks.find((task: any) => task.id === taskId)) {
        taskToMove = column.tasks.find((task: any) => task.id === taskId);
        return {
          ...column,
          tasks: column.tasks.filter((task: any) => task.id !== taskId),
        };
      }
      return column;
    });

    // Add the task to the destination column
    return updatedColumns.map((column: any) => {
      if (column.id === destinationColumnId && taskToMove) {
        return {
          ...column,
          tasks: [...column.tasks, taskToMove],
        };
      }
      return column;
    });
  };

  return { columns, handleDragEnd };
};
