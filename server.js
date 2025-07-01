const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3231;

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/users');
const courseRoutes = require('./routes/course');

app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/users', userRoutes);
app.use('/course', courseRoutes);

async function main() {
    try {
        console.log('MONGO_URL:', process.env.MONGO_URL); // Debug
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

main();