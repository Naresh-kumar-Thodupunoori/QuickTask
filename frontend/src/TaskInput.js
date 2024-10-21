// src/TaskInput.js

import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    } else {
      alert('Please enter a task.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-section">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
