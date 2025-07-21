const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // allows parsing JSON request bodies

const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});

app.use(express.json());

// Connect to MongoDB
// MongoDB connection
mongoose.connect('mongodb+srv://offsray7044:sri200@mean.6gasikk.mongodb.net/')
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err));

// Create Product Schema & Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const Product = mongoose.model('Product', productSchema)