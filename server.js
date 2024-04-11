const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for messages (replace this with a database in a real-world scenario)
let messages = [];

// GET endpoint to retrieve all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// POST endpoint to add a new message
app.post('/messages', (req, res) => {
    const { username, text } = req.body;
    const newMessage = { username, text };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});