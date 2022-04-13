import express from 'express';
import bodyParser from 'body-parser';
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
mongoose.connect('mongodb://localhost:27017/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .catch(e => console.error(e.message))
    .then(r => console.log(r));

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
