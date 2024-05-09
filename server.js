const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

const cors = require('cors'); 
// ...

const app = express();
app.use(cors());

app.use(bodyParser.json());
// Serve static files from the 'Front-end' folder


mongoose.connect('mongodb+srv://project:project@cluster0.kos1k7l.mongodb.net/meomics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema ({
    name: String,
    email: String,
    message: String,
});
const Contact = mongoose.model('Contact', contactSchema);



app.post('/add', (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });
    newContact.save()
    .then(() => {
        res.json({ message: 'Data submitted successfully!' });
    })
    .catch(error => {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
  
});

// Add a route to serve the CSS file

app.listen(3000, function () {
    console.log('App is running on http://localhost:3000');
});