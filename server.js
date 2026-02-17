const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(5000, () => console.log('Server running on port 5000'));
