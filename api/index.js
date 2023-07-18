const server = require('./app.js');
const { conn } = require('./db.js');
require('dotenv').config();
const PORT =  process.env.PORT || 3000;
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, "0.0.0.0", () => {
    console.log('%s listening at',PORT); // eslint-disable-line no-console
  });
});
