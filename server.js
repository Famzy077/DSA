const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to Database
mongoose.connect('mongodb://localhost:27017/user')
.then(() => console.log('Database connected'))
.catch(err => console.error('DB connection error:', err));

// Schema definition
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

// Mongoose Model
const User = mongoose.model('User', userSchema);

// Create (POST) route
app.post('/auth/user', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
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

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
