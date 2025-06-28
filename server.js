const express = require('express');
const app = express();
const port = 3231
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/users');
app.use('/admin', adminRoutes);
app.use('/users', userRoutes);
app.use(express.json)










app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});