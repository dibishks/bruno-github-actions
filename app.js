const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let items = [];
let nextId = 1;

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get item by id
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// Create new item
app.post('/items', (req, res) => {
  const { name, value } = req.body;
  if (!name || value === undefined) {
    return res.status(400).json({ error: 'Name and value are required' });
  }
  const item = { id: nextId++, name, value };
  items.push(item);
  res.status(201).json(item);
});

// Update item
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  const { name, value } = req.body;
  if (name !== undefined) item.name = name;
  if (value !== undefined) item.value = value;
  res.json(item);
});

// Delete item
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });
  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 