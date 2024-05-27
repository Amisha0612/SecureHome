// src/server/server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import sendEmail from './mail.js';

const app = express();
const PORT = 2000;
const url = 'mongodb+srv://amisha0160be21:amishasharma@kollege.axiot2l.mongodb.net/SecureHome?retryWrites=true&w=majority&appName=kollege';

app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb://127.0.0.1:27017/Panic', {
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Not connected', error));

app.post('/api/panic', async (req, res) => {
    const { email, location } = req.body;

    try {
        const emailSent = await sendEmail(location);
        if (emailSent) {
            res.status(200).send('Panic triggered and email sent successfully');
        } else {
            res.status(500).send('Panic triggered but email sending failed');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
