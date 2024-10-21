import React from 'react';

function TaskItem({ task, deleteTask }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
