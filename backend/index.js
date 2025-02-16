const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

app.use(cors('localhost:3000'))

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const data = req.body;

    res.json({ message: data.message });
});

app.listen(8000, () => {
    console.log('Listening at port 8000')
})