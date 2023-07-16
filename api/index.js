const express = require('express');
require('dotenv').config();
const PORT =  process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor funcionando!')
})

app.listen(PORT, "0.0.0.0",() => {
    console.log(`Example app listening on port ${PORT}`);
})