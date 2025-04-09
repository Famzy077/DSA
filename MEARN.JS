// ✅ Create
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});


// 📥 Read
app.get('/api/users', async (req, res) => {
  const users = await User.find(); // Find all
  res.json(users);
});

// ✏️ Update
app.put('/api/users/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

// ❌ Delete
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});
// 📦 MongoDB Queries
// Find specific
User.find({ name: 'Xavier' })

// Update one
User.updateOne({ name: 'Xavier' }, { $set: { role: 'admin' } })

// Delete one
User.deleteOne({ email: 'xavier@example.com' })

// Find by ID
User.findById(id)

// ⚛️ React Component Structure & Hooks
// jsx
import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user._id}>{user.name}</li>)}
    </ul>
  );
};
// 🧩 Express Middleware Example
// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Body parser
app.use(express.json());
// 🔗 Connecting Frontend to Backend
// CORS Setup in Express:
const cors = require('cors');
app.use(cors({
    origin: 'https://www.frontend.com'
}));

// Frontend (React Fetch Example):
fetch('http://localhost:5000/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
