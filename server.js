const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/messageboard', { useNewUrlParser: true, useUnifiedTopology: true });
const Message = mongoose.model('Message', { text: String });

app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

app.post('/messages', async (req, res) => {
    try {
        const message = new Message({ text: req.body.text });
        await message.save();
        res.status(201).json(message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});