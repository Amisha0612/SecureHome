// const express = require ('express');
// const mongoose = require ('mongoose');
// const app = express();

// mongoose.connect('mongodb://127.0.0.1:27017/user')
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((err) => {
//     console.log(err);
// }) 
// app.listen(3000, ()=>{
//     console.log("server is running");
// })




// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const User = require('./models/user');

// const app = express();

// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('Connected to MongoDB');
// });

// app.post('/signup', async (req, res) => {
//     const { email, password } = req.body;
//     const user = new User({ email, password });
//     try {
//         await user.save();
//         res.status(201).send({ message: 'User created successfully' });
//     } catch (err) {
//         res.status(500).send({ message: 'Error creating user' });
//     }
// });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             res.status(401).send({ message: 'Invalid email or password' });
//         } else {
//             const isValid = await user.comparePassword(password);
//             if (!isValid) {
//                 res.status(401).send({ message: 'Invalid email or password' });
//             } else {
//                 res.status(200).send({ message: 'Logged in successfully' });
//             }
//         }
//     } catch (err) {
//         res.status(500).send({ message: 'Error logging in' });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// });

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Import routes
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// // Start server
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Server running on port ${port}`));




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnect = require('./Config/dbConnect')

const app = express();

app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB

// Middleware

dbConnect();


// Import routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Start server
const port = 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
