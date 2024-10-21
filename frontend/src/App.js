// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css'; // Optional for styling

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  // Add a new task
  const addTask = (taskText) => {
    axios.post('http://localhost:5000/tasks', { text: taskText })
      .then(response => {
        setTasks([...tasks, response.data]);
      })
      .catch(error => console.error('Error adding task:', error));
  };

  // Delete a task
  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="container">
      <h1>QuickTask</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;