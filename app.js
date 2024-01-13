// app.js
const express = require('express');
const programRoutes = require('./src/routes/programRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', programRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
