const mongoose = require('mongoose');
const url = "mongodb+srv://amisha0160be21:amishasharma@kollege.axiot2l.mongodb.net/SecureHome?retryWrites=true&w=majority&appName=kollege";

const dbConnect = async () => {
    try {
        //connect mein apna link paste krdio bs 
        await mongoose.connect(url, {
            bufferTimeoutMS: 30000 // 30 seconds
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log("Connected to MongoDB Cloud");
    } catch (error) {
        console.log("Error connecting to MongoDB Cloud:", error);
    }
}

module.exports = dbConnect;


//mongodb://localhost:27017/
//mongodb+srv://amisha0160be21:<amishasharma>@kollege.axiot2l.mongodb.net/?retryWrites=true&w=majority&appName=kollege