const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const contactsRouter = require('./routes/contacts');
const meetingsRouter = require('./routes/meetings');

app.use('/contacts', contactsRouter);
app.use('/meetings', meetingsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`RMA Server is running on port ${port}`);
});
