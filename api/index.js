const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Servidor funcionando!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})