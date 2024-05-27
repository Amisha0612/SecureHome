const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app
const app = express();
const port = 5500;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
//////////// mongodb+srv://amisha0160be21:<password>@kollege.axiot2l.mongodb.net/?retryWrites=true&w=majority&appName=kollege
const uri = 'mongodb+srv://amisha0160be21:amishasharma@kollege.axiot2l.mongodb.net/SecureHome?retryWrites=true&w=majority&appName=kollege';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
    agreedToPolicy: Boolean,
});

const Form = mongoose.model('Form', formSchema);

// API endpoint to handle form submission
app.post('/submit-form', async (req, res) => {
    const { firstName, lastName, email, phone, message, agreedToPolicy } = req.body;

    const newForm = new Form({ firstName, lastName, email, phone, message, agreedToPolicy });
    try {
        await newForm.save();
        res.status(201).send('Form data saved successfully');
    } catch (error) {
        res.status(400).send('Error saving form data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


