const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];
let id = 1;


app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const taskText = req.body.text;
  if (taskText) {
    const newTask = { id: id++, text: taskText };
    tasks.push(newTask);
    res.json(newTask);
  } else {
    res.status(400).json({ error: 'Task text is required' });
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
